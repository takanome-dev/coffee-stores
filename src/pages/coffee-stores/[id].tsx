import { GetStaticPaths, GetStaticProps } from 'next';
import { useContext } from 'react';

import CoffeeStore from '@components/CoffeeStore';
import Meta from '@components/Meta';
import { Context } from '@context/Provider';
import getStores from '@lib/stores';
import { USLatLong } from '@utils/constants';

export default function SingleStorePage({ id }: { id: string }) {
  const { coffeeStores } = useContext(Context);

  const coffeeStore = coffeeStores.find((c) => c.fsq_id === id);

  return (
    <>
      <Meta
        title={`Coffee Stores | ${coffeeStore?.name!}`}
        description="Find your favorite local coffee"
        image="/static/coffeestores.webp"
      />
      <CoffeeStore coffeeStore={coffeeStore!} />
    </>
  );
}

export const getStaticProps: GetStaticProps = (context) => ({
  props: {
    id: context.params?.id,
  },
});

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getStores(USLatLong);
  const paths = data.map((c) => ({ params: { id: c.fsq_id } }));

  return {
    paths,
    fallback: true,
  };
};
