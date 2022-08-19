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
    const photosArr: string[] = [];
    photos.forEach((f) =>
      photosArr.push(`${f?.prefix}${size}x${size}${f?.suffix}`)
    );
    return res.json(photosArr);
  }

  const result = await unsplashApi.search.getPhotos({ query: 'coffee shop' });
  const photosArr: string[] = [];
  result.response?.results.forEach((f) => photosArr.push(f.urls.regular));
  return res.json(photosArr);
}
