import styles from '../styles/Home.module.css';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Hello World</h1>
    </main>
  </div>
);

export default Home;
