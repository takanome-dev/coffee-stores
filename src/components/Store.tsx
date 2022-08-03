/* eslint-disable no-void */
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { Context } from '@context/Provider';
import styles from '@styles/Store.module.css';
import paginate from '@utils/paginate';

import Card from './Card';
import Header from './Header';
import Pagination from './Pagination';
import { CoffeeStoreProps } from './types';

const Store = () => {
  const [stores, setStores] = useState<CoffeeStoreProps[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const router = useRouter();
  const { coffeeStores } = useContext(Context);
  console.log({ stores });

  const pageSize = 9;
  const totalPages = Math.ceil(coffeeStores.length / pageSize);
  const pages = Array.from(Array(totalPages + 1).keys()).filter((n) => n !== 0);

  useEffect(() => {
    const data = paginate<CoffeeStoreProps>(coffeeStores, pageNumber, pageSize);
    setStores(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    void router.push({
      pathname: '/coffee-stores',
      query: `page=${pageNumber}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.cardList}>
        {stores.map((store) => (
          <Card key={store.fsq_id} store={store} />
        ))}
      </div>
      <Pagination
        pages={pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Store;
