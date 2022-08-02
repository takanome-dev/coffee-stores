import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import { NextApiRequest, NextApiResponse } from 'next';

import { Cities } from '@components/types';
import cities from '@data/cities.json';
import getGeoLocations from '@lib/google';
// import applyRateLimit from '@utils/rateLimit';

// import type { NextApiResponse, NextApiRequest } from 'next';

// const applyMiddleware =
//   (middleware: any) => (req: NextApiRequest, res: NextApiResponse) =>
//     new Promise((resolve, reject) => {
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//       middleware(req, res, (result: any) =>
//         // console.log({ req, res, result });
//         result instanceof Error ? reject(result) : resolve(result)
//       );
//     });

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  console.log({ function: fn(), TypoOfFunc: typeof fn });
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      console.log({ result });
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const getIP = (req: NextApiRequest) => {
  req.headers.authorization = '';

  return (
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.socket.remoteAddress
  );
};

const getRateLimitMiddlewares = ({
  limit = 90,
  windowMs = 24 * 3600 * 1000,
  delayAfter = Math.round(90 / 2),
  delayMs = 500,
} = {}) => [
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  slowDown({ keyGenerator: getIP as any, windowMs, delayAfter, delayMs }),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  rateLimit({
    keyGenerator: getIP as any,
    windowMs,
    max: limit,
    standardHeaders: true,
    legacyHeaders: false,
  }),
];

const middlewares = getRateLimitMiddlewares();

// export default async function applyRateLimit(
//   request: NextApiRequest,
//   response: NextApiResponse
// ) {
//   await Promise.all(
//     middlewares
//       .map(applyMiddleware)
//       .map((middleware) => middleware(request, response))
//   );
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // await applyRateLimit(req, res);
    // console.log(req.headers);

    // console.log(req.headers);
    await Promise.all(
      middlewares.map((middleware) => runMiddleware(req, res, middleware))
    );
  } catch (err) {
    console.log({ err });
    return res.status(429).send('Too many requests, please try again later');
  }

  const city = (cities as Cities[]).find((c) => c.city_name === 'Paris');

  const coffees = await getGeoLocations(city?.geonameid as number);
  return res.json(coffees);
}
