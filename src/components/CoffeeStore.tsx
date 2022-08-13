import Image from 'next/image';
import { useContext } from 'react';

import { Context } from '@context/Provider';
import useImage from '@hooks/useImage';
import styles from '@styles/CoffeeStore.module.css';

import Header from './Header';

const CoffeeStore = ({ id }: { id: string }) => {
  const { coffeeStores } = useContext(Context);
  const coffeeStore = coffeeStores.find((c) => c.fsq_id === id);

  const { imageUrl } = useImage(coffeeStore?.photos!);

  return (
    <div className="container">
      <Header name={coffeeStore?.name} />
      <div className={styles.cardContainer}>
        <div className={styles.cardImg}>
          <Image
            src={imageUrl}
            alt={coffeeStore?.name}
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className={styles.cardContent}>
          <h2 className={styles.name}>☕ &nbsp;&nbsp;{coffeeStore?.name}</h2>
          <p className={styles.address}>
            🌐 &nbsp;&nbsp; {coffeeStore?.location.address}
          </p>
          <p className={styles.locality}>
            🇻🇦 &nbsp;&nbsp; {coffeeStore?.location.locality}
          </p>
          <p className={styles.country}>
            🏁 &nbsp;&nbsp; {coffeeStore?.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
