import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

import type { NextApiResponse, NextApiRequest } from 'next';

const applyMiddleware =
  (middleware: any) => (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      middleware(req, res, (result: any) => {
        console.log({ req, res, result });
        return result instanceof Error ? reject(result) : resolve(result);
      });
    });

const getIP = (req: NextApiRequest) =>
  req.headers['x-forwarded-for'] ||
  req.headers['x-real-ip'] ||
  req.socket.remoteAddress;

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

export default async function applyRateLimit(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await Promise.all(
    middlewares
      .map(applyMiddleware)
      .map((middleware) => middleware(request, response))
  );
}
