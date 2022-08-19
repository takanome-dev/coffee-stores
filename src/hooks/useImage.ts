/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';

import { CoffeeStoreImage } from '@components/types';
import { fallbackImage } from '@utils/constants';
import http from '@utils/http';

export default function useImage(photos: CoffeeStoreImage[], size = 400) {
  const [imageUrls, setImageUrls] = useState([fallbackImage]);

  useEffect(() => {
    // eslint-disable-next-line no-void
    void (async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const res = await http<string[]>(
        'http://localhost:9999/api/getStoreImage',
        'POST',
        { photos, size } as any
      );
      setImageUrls(res);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { imageUrls };
}
