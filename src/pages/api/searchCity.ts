import { NextApiRequest, NextApiResponse } from 'next';

import { Cities } from '@components/types';
import cities from '@data/cities.json';
import getGeoLocations from '@lib/google';
import applyRateLimit from '@utils/rateLimit';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await applyRateLimit(req, res);
  } catch {
    return res.status(429).send('Too many requests, please try again tomorrow');
  }

  const city = (cities as Cities[]).find((c) => c.city_name === 'Paris');

  const coffees = await getGeoLocations(city?.geonameid as number);
  return res.json(coffees);
}
