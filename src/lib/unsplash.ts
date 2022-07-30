import { createApi } from 'unsplash-js';

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY as string,
});

export default unsplashApi;
