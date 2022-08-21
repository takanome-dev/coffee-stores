import { useContext, useEffect } from 'react';

import Banner from '@components/Banner';
import Card from '@components/Card';
import Meta from '@components/Meta';
import { CoffeeStoreProps } from '@components/types';
import { Context } from '@context/Provider';
import getStores from '@lib/stores';
import styles from '@styles/Home.module.css';
import { USLatLong } from '@utils/constants';

import type { GetStaticProps } from 'next';

const Home = ({ coffeeStores }: { coffeeStores: CoffeeStoreProps[] }) => {
  const { handleCoffeeStores } = useContext(Context);

  useEffect(() => {
    handleCoffeeStores?.(coffeeStores);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Meta
        title="Coffee Stores"
        description="Find your favorite local coffee"
        image="/static/coffeestores.webp"
      />
      <main className={styles.main}>
        <div className="wrapper">
          <Banner />
          <h2 className={styles.heading}>Trending Coffee Stores</h2>
          <div className={styles.cardList}>
            {coffeeStores.map((store) => (
              <Card key={store.fsq_id} store={store} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getStores(USLatLong);

  return {
    props: {
      coffeeStores: data,
    },
  };
};
