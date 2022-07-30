import Banner from '@components/Banner';
import Card from '@components/Card';
import { CoffeeStoreProps } from '@components/types';
import storesApi from '@lib/stores';
import styles from '@styles/Home.module.css';

import type { GetStaticProps } from 'next';

const Home = ({ coffeeStores }: { coffeeStores: CoffeeStoreProps[] }) => (
  <main className={styles.main}>
    <Banner />
    <h2 className={styles.heading}>Trending Coffee Stores</h2>
    <div className={styles.cardList}>
      {coffeeStores.map((store) => (
        <Card key={store.fsq_id} store={store} />
      ))}
    </div>
  </main>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // default latitude,longitude from US
  const data = await storesApi.getStores('37.090240,-95.712891');

  return {
    props: {
      coffeeStores: data,
    },
  };
};
