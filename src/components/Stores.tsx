/* eslint-disable no-void */
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { Context } from '@context/Provider';
import paginate from '@utils/paginate';

import Card from './Card';
import Header from './Header';
import Pagination from './Pagination';
import Skeleton from './Skeleton';
import { CoffeeStoreProps } from './types';

const Stores = () => {
  const [stores, setStores] = useState<CoffeeStoreProps[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const router = useRouter();
  const { coffeeStores, loading } = useContext(Context);

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
  }, [pageNumber, coffeeStores]);

  return (
    <div className="container">
      <Header />
      {loading ? (
        <Skeleton />
      ) : (
        <div className="cardList">
          {stores.map((store) => (
            <Card key={store.fsq_id} store={store} />
          ))}
        </div>
      )}
      {!loading && (
        <Pagination
          pages={pages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default Stores;
