import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Banner.module.css';

const Banner = () => (
  <div className={styles.container}>
    <div className={styles.banner}>
      <h1 className={styles.title}>Find your favorite local coffee</h1>
      <p className={styles.subTitle}>
        All you need to feel better is coffee
        <span className={styles.coffee}>☕</span>
      </p>
      <Link href="/coffee-stores">
        <button type="button" className={styles.button}>
          Discover Coffee Stores
        </button>
      </Link>
    </div>
    <div className={styles.hero_img}>
      <Image
        src="/static/man_with_coffee.webp"
        alt="Hero Image"
        width="300px"
        height="300px"
      />
    </div>
  </div>
);

export default Banner;
