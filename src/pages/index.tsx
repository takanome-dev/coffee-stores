import Image from 'next/image';

import styles from '../styles/Home.module.css';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1 className={styles.title}>Find your favorite local coffee</h1>
        <p className={styles.subTitle}>All you need to feel better is coffee</p>
        <button type="button" className={styles.button}>
          Discover Coffee Store
        </button>
      </div>
      <div className={styles.hero_img}>
        <Image
          src="/static/man_with_coffee.png"
          alt="Hero Image"
          width="300px"
          height="300px"
          // layout="responsive"
        />
      </div>
    </main>
  </div>
);

export default Home;
