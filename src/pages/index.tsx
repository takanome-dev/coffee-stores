/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Banner from '@components/Banner';
import Card from '@components/Card';
import stores from '@data/stores.json';
import styles from '@styles/Home.module.css';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <main className={styles.main}>
    <Banner />
    <h2 className={styles.heading}>Trending Coffee Stores</h2>
    <div className={styles.cardList}>
      {stores.map((store) => (
        <Card
          key={store.id}
          imgUrl={store.imgUrl}
          name={store.name}
          address={store.address}
        />
      ))}
    </div>
  </main>
);

export default Home;
