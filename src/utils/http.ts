export default async function http<T>(
  url: string,
  method = 'GET',
  body?: BodyInit
): Promise<T> {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY as string,
    },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(url, options);
  return response.json() as Promise<T>;
}
