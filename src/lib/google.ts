import { RapidApiResponse } from '@components/types';

export default async function getGeoLocations(geonameid: number) {
  // const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=france&inputtype=textquery&fields=geometry&key=${process.env.GOOGLE_API_KEY!}`;
  // const response = await fetch(url, { method: 'GET' });
  // return (await response.json()) as Promise<PlaceResponse>;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6e78232b3emsh19c59211cf35032p1e6b2fjsnd21b55b167e1',
      'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com',
    },
  };

  const response = await fetch(
    `https://countries-cities.p.rapidapi.com/location/city/${geonameid}`,
    options
  );
  return (await response.json()) as Promise<RapidApiResponse>;
}
