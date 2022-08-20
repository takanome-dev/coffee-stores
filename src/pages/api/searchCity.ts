import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import { NextApiRequest, NextApiResponse } from 'next';

import { Cities } from '@components/types';
import cities from '@data/cities.json';
import getGeoLocations from '@lib/geoLocation';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        console.log({ result });
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const getIP = (req: NextApiRequest) =>
  req.headers['x-forwarded-for'] ||
  req.headers['x-real-ip'] ||
  req.socket.remoteAddress;

// Limit each IP to 90 requests per `window` (here, per 24 hours)
const limit = 90;
// windowMs -> 24 hours
const windowMs = 24 * 3600 * 1000;
const delayAfter = Math.round(limit / 2);
// delayMs -> 500 ms
const delayMs = 500;

const limiter = rateLimit({
  keyGenerator: getIP as any,
  windowMs,
  max: limit,
  standardHeaders: true,
  legacyHeaders: false,
});

const speedLimiter = slowDown({
  keyGenerator: getIP as any,
  windowMs,
  delayAfter,
  delayMs,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await Promise.all([
      await runMiddleware(req, res, speedLimiter),
      await runMiddleware(req, res, limiter),
    ]);
  } catch (err) {
    console.error(err);
    return res.status(429).send('Too many requests, please try again later');
  }

  const query = JSON.parse(req.body as string) as string;

  const city = (cities as Cities[]).find(
    (c) => c.city_name.toLowerCase() === query.toLowerCase()
  );

  if (!city) {
    return res.status(400).json({
      status: 400,
      message: 'The city is not found, please try again',
    });
  }

  const coffees = await getGeoLocations(city?.geonameid);
  return res.json(coffees);
}
