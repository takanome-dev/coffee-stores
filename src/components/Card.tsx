import cls from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import styles from '@styles/Card.module.css';
import { fallbackImage } from '@utils/constants';
import getStoreImage from '@utils/getStoreImage';

import { CoffeeStoreProps } from './types';

interface Props {
  store: CoffeeStoreProps;
}

const Card: React.FC<Props> = ({ store }) => {
  const [imageUrl, setImageUrl] = useState(fallbackImage);

  // eslint-disable-next-line no-void
  void (async () => {
    const image = await getStoreImage(store.photos);
    setImageUrl(image!);
  })();

  console.log({ imageUrl });

  return (
    <Link href={`/coffee-stores/${store.fsq_id}`}>
      <div className={styles.card}>
        <Image
          src={imageUrl}
          alt={store.name}
          width="100%"
          height="80px"
          layout="responsive"
          placeholder="blur"
          blurDataURL={fallbackImage}
        />
        <div className={styles.details}>
          <h3 className={cls(styles.detailsName, 'ellipsis')}>{store.name}</h3>
          <p className={cls(styles.detailsAddress, 'ellipsis')}>
            {store.location.address}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
