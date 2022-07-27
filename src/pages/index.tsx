import Banner from '../components/Banner';
import styles from '../styles/Home.module.css';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <main className={styles.main}>
    <Banner />
  </main>
);

export default Home;
