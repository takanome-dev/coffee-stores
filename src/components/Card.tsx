import cls from 'classnames';
import Image from 'next/image';

import styles from '@styles/Card.module.css';

import { CoffeeStoreProps } from './types';

const Card = ({ imgUrl, name, address }: CoffeeStoreProps) => (
  <div className={styles.card}>
    <Image
      src={imgUrl!}
      alt={name}
      width="100%"
      height="80px"
      layout="responsive"
    />
    <div className={styles.details}>
      <h3 className={cls(styles.detailsName, 'ellipsis')}>{name}</h3>
      <p className={cls(styles.detailsAddress, 'ellipsis')}>{address}</p>
    </div>
  </div>
);

export default Card;
