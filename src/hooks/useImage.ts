import { useEffect, useState } from 'react';

import { CoffeeStoreImage } from '@components/types';
import { fallbackImage } from '@utils/constants';
import http from '@utils/http';

export default function useImage(photos: CoffeeStoreImage[], size = 400) {
  const [imageUrls, setImageUrls] = useState([fallbackImage]);

  useEffect(() => {
    // eslint-disable-next-line no-void
    void (async () => {
      const res = await http<string[]>(
        'https://coffee-stores-dev.vercel.app/api/getStoreImage',
        'POST',
        { photos, size }
      );
      setImageUrls(res);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { imageUrls };
}
