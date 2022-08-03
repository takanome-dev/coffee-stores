import { RapidApiResponse } from '@components/types';

export default async function getGeoLocations(geonameid: number) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
      'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com',
    },
  };

  const response = await fetch(
    `https://countries-cities.p.rapidapi.com/location/city/${geonameid}`,
    options
  );
  return (await response.json()) as Promise<RapidApiResponse>;
}
