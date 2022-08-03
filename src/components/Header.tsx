import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

import styles from '@styles/Header.module.css';
import http from '@utils/http';
import storesApi from '@lib/stores';

import { CoffeeStoreProps, HeaderProps, RapidApiResponse } from './types';
import { Context } from '@context/Provider';

const Header: React.FC<HeaderProps> = ({ name = '' }) => {
  // const [inputValue, setInputValue] = useState('');
  const { handleCoffeeStores } = useContext(Context);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    try {
      const res = await http<RapidApiResponse>(
        '/api/searchCity',
        'POST',
        value
      );

      if (res.status === 400) return toast.error(res.message);

      const data = (await storesApi.getStores(
        `${res.latitude},${res.longitude}`,
        50
      )) as CoffeeStoreProps[];
      handleCoffeeStores?.(data);
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
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Header;
