import { NextApiRequest, NextApiResponse } from 'next';

import getStores from '@lib/stores';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { coords } = JSON.parse(req.body as string) as { coords: string };
  const coffeeStores = await getStores(
    coords,
    50,
    'https://api.foursquare.com/v3/places/nearby'
  );
  return res.json(coffeeStores);
}
