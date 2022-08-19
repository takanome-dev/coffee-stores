import { GetStaticPaths, GetStaticProps } from 'next';

import CoffeeStore from '@components/CoffeeStore';
import getStores from '@lib/stores';
import { USLatLong } from '@utils/constants';

export default function SingleStorePage({ id }: { id: string }) {
  return <CoffeeStore id={id} />;
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
    fallback: false,
  };
};
