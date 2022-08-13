/* eslint-disable @typescript-eslint/no-unsafe-argument */
import cls from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import useImage from '@hooks/useImage';
import styles from '@styles/Card.module.css';
import { fallbackImage } from '@utils/constants';

import { CoffeeStoreProps } from './types';

interface Props {
  store: CoffeeStoreProps;
}

const Card: React.FC<Props> = ({ store }) => {
  // const [imageUrl, setImageUrl] = useState(fallbackImage);

  // useEffect(() => {
  //   // eslint-disable-next-line no-void
  //   void (async () => {
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //     const res = await http<string>(
  //       'http://localhost:9999/api/getStoreImage',
  //       'POST',
  //       {
  //         photos: store.photos,
  //         size: 400,
  //       } as any
  //     );
  //     setImageUrl(res);
  //   })();

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const { imageUrl } = useImage(store.photos);

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
