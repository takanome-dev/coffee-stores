import { GetStaticPaths, GetStaticProps } from 'next';

import CoffeeStore from '@components/CoffeeStore';
import { CoffeeStoreProps } from '@components/types';
import getStores from '@lib/stores';
import { USLatLong } from '@utils/constants';

const SingleStorePage = ({ id }: { id: string }) => <CoffeeStore id={id} />;

export default SingleStorePage;

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
