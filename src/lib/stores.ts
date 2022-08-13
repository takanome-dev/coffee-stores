import { ApiResponse } from '@components/types';
import filterQuery from '@utils/filterQuery';
import http from '@utils/http';

export default async function getStores(
  latLong?: string,
  limit = 10,
  query = 'coffee shop'
) {
  const data = await http<ApiResponse>(
    `https://api.foursquare.com/v3/places/search?query=${filterQuery(
      query
    )}&ll=${filterQuery(
      latLong as string
    )}&limit=${limit}&radius=50000&categories=11126%2C13032%2C13033%2C13034%2C13035%2C13036%2C&fields=fsq_id%2Cname%2Clocation%2Ctimezone%2Ctel%2Cfax%2Cemail%2Cwebsite%2Csocial_media%2Crating%2Cpopularity%2Cmenu%2Cphotos%2Cdate_closed%2Chours_popular%2Chours`
  );

  return data.results;
}
