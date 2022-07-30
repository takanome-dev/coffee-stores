import Store from '@components/Store';
import { CoffeeStoreProps } from '@components/types';
import storesApi from '@lib/stores';

const CoffeeStoresPage = ({
  coffeeStores,
}: {
  coffeeStores: CoffeeStoreProps[];
}) => <Store coffeeStores={coffeeStores} />;

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
