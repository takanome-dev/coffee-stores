import unsplashApi from '@lib/unsplash';

import { CoffeeStoreImage } from '../components/types';

export default async function getStoreImage(
  photos: CoffeeStoreImage[],
  size = 400
) {
  if (photos.length) {
    return `${photos[0]?.prefix}${size}x${size}${photos[0]?.suffix}`;
  }

  const res = await unsplashApi.search.getPhotos({ query: 'coffee shop' });
  console.log({ res });
  return res.response?.results[0].urls.regular;
}
