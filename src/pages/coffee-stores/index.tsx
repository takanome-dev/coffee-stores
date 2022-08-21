import { useContext, useEffect } from 'react';

import Meta from '@components/Meta';
import Stores from '@components/Stores';
import { CoffeeStoreProps } from '@components/types';
import { Context } from '@context/Provider';
import getStores from '@lib/stores';
import { NYLatLong } from '@utils/constants';

const CoffeeStoresPage = ({
  coffeeStores,
}: {
  coffeeStores: CoffeeStoreProps[];
}) => {
  const { handleCoffeeStores } = useContext(Context);

  useEffect(() => {
    handleCoffeeStores?.(coffeeStores);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Meta
        title="Coffee Stores | Discover Coffee Stores"
        description="Find your favorite local coffee"
        image="/static/coffeestores.webp"
      />
      <Stores />
    </>
  );
};

export default CoffeeStoresPage;

export const getServerSideProps = async () => {
  const data = await getStores(NYLatLong, 50);

  return {
    props: {
      coffeeStores: data,
    },
  };
};
