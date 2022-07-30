/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  CoffeeStoreProps,
  CoffeeStoreImage,
  ApiResponse,
} from '@components/types';
import filterQuery from '@utils/filterQuery';
import http from '@utils/http';

import unsplashApi from './unsplash';

const getStoreImages = async (store: CoffeeStoreProps) => {
  const data = await http<CoffeeStoreImage[]>(
    `https://api.foursquare.com/v3/places/${store.fsq_id}/photos`
  );

  if (!data.length) {
    const res = await unsplashApi.search.getPhotos({ query: 'coffee shop' });
    return {
      ...store,
      mediumImageUrl: res.response?.results[0].urls.small,
      largeImageUrl: res.response?.results[0].urls.regular,
    };
  }

  const mediumSize = `${data[0]?.prefix}300x300${data[0]?.suffix}`;
  const largeSize = `${data[0]?.prefix}700x700${data[0]?.suffix}`;

  return { ...store, mediumImageUrl: mediumSize, largeImageUrl: largeSize };
};

const getStores = async (
  latLong?: string,
  limit = 10,
  query = 'coffee shop'
) => {
  const data = await http<ApiResponse>(
    `https://api.foursquare.com/v3/places/search?query=${filterQuery(
      query
    )}&ll=${filterQuery(
      latLong as string
    )}&limit=${limit}&radius=50000&categories=11126%2C13032%2C13033%2C13034%2C13035%2C13036%2C`
  );

  const promises: Promise<CoffeeStoreProps>[] = [];
  data.results.forEach((store) => promises.push(getStoreImages(store)));

  const stores = await Promise.all(promises)
    .then((res) => res)
    .catch(console.log);

  return stores;
};

export default { getStores, getStoreImages };
