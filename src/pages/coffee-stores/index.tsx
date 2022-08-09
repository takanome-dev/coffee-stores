import { useContext, useEffect } from 'react';

import Stores from '@components/Stores';
import { CoffeeStoreProps } from '@components/types';
import { Context } from '@context/Provider';
import storesApi from '@lib/stores';
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

  return <Stores />;
};

export default CoffeeStoresPage;

export const getServerSideProps = async () => {
  const data = await storesApi.getStores(NYLatLong, 50);

  return {
    props: {
      coffeeStores: data,
    },
  };
};
