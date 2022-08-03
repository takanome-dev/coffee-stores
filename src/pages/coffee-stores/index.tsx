import Store from '@components/Store';
import { CoffeeStoreProps } from '@components/types';
import { Context } from '@context/Provider';
import storesApi from '@lib/stores';
import { useContext, useEffect } from 'react';

const CoffeeStoresPage = ({
  coffeeStores,
}: {
  coffeeStores: CoffeeStoreProps[];
}) => {
  const { handleCoffeeStores } = useContext(Context);

  useEffect(() => {
    handleCoffeeStores?.(coffeeStores);
  }, []);

  return <Store />;
};

export default CoffeeStoresPage;

export const getServerSideProps = async () => {
  // default latitude,longitude from US
  const data = await storesApi.getStores('40.712776,-74.005974', 50);

  return {
    props: {
      coffeeStores: data,
    },
  };
};
