// import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const data = paginate<CoffeeStoreProps>(coffeeStores, pageNumber, 9);
    setStores(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        {stores.map((store) => (
          <Card key={store.fsq_id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default Store;
