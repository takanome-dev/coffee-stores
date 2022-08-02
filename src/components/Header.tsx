import Link from 'next/link';
import React from 'react';

import styles from '@styles/Header.module.css';
import http from '@utils/http';

import { HeaderProps, RapidApiResponse } from './types';

const Header: React.FC<HeaderProps> = ({ name = '' }) => {
  // const [inputValue, setInputValue] = useState('');

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    try {
      const res = await http<RapidApiResponse>(
        '/api/searchCity',
        'POST',
        value
      );
      console.log({ res });
    } catch (err) {
      console.error({ err });
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href="/">🏠</Link>
        <small>&gt;</small>
        {name ? (
          <>
            <Link href="/coffee-stores">Coffee Stores</Link>
            <small>&gt;</small>
            <span>{name}</span>
          </>
        ) : (
          <span>Coffee Stores</span>
        )}
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search by city name"
          // value={inputValue}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Header;
