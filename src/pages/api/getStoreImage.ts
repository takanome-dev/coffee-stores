/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextApiRequest, NextApiResponse } from 'next';

import { CoffeeStoreImage } from '@components/types';
import unsplashApi from '@lib/unsplash';

interface Body {
  photos: CoffeeStoreImage[];
  size: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  const { photos, size } = JSON.parse(body as string) as Body;

  if (photos.length) {
    return res.json(`${photos[0]?.prefix}${size}x${size}${photos[0]?.suffix}`);
  }

  const result = await unsplashApi.search.getPhotos({ query: 'coffee shop' });
  return res.json(result.response?.results[0].urls.regular);
}
