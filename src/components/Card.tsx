import cls from 'classnames';
import Image from 'next/image';

import styles from '@styles/Card.module.css';

import { CoffeeStoreProps } from './types';

interface Props {
  store: CoffeeStoreProps;
}

const Card: React.FC<Props> = ({ store }) => (
  <div className={styles.card}>
    <Image
      src={store.mediumImageUrl as string}
      alt={store.name}
      width="100%"
      height="80px"
      layout="responsive"
    />
    <div className={styles.details}>
      <h3 className={cls(styles.detailsName, 'ellipsis')}>{store.name}</h3>
      <p className={cls(styles.detailsAddress, 'ellipsis')}>
        {store.location.address}
      </p>
    </div>
  </div>
);

export default Card;