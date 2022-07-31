/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-void */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '@styles/Store.module.css';
import paginate from '@utils/paginate';

import Card from './Card';
import { CoffeeStoreProps } from './types';

interface Props {
  coffeeStores: CoffeeStoreProps[];
}

const Store: React.FC<Props> = ({ coffeeStores }) => {
  const [stores, setStores] = useState<CoffeeStoreProps[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const router = useRouter();

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
      <div className={styles.cardList}>
        {stores.map((store) => (
          <Card key={store.fsq_id} store={store} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Link href={`/coffee-stores?page=${pageNumber - 1}`}>
          <a
            data-disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            ⬅ Prev
          </a>
        </Link>
        {pages.map((page) => (
          <Link href={`/coffee-stores?page=${page}`} key={page}>
            <a
              data-active={page === pageNumber}
              onClick={() => setPageNumber(page)}
            >
              {page}
            </a>
          </Link>
        ))}
        <Link href={`/coffee-stores?page=${pageNumber + 1}`}>
          <a
            data-disabled={pageNumber >= totalPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next ➡️
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Store;
