/* eslint-disable @typescript-eslint/no-misused-promises */
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { Context } from '@context/Provider';
import storesApi from '@lib/stores';
import styles from '@styles/Header.module.css';
import http from '@utils/http';

import { CoffeeStoreProps, HeaderProps, RapidApiResponse } from './types';

const Header: React.FC<HeaderProps> = ({ name = '' }) => {
  const [inputValue, setInputValue] = useState('');
  const { handleCoffeeStores, loading, handleLoading } = useContext(Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value.trim());

  // eslint-disable-next-line consistent-return
  const handleSubmit = async () => {
    handleLoading?.(true);

    try {
      const res = await http<RapidApiResponse>(
        '/api/searchCity',
        'POST',
        inputValue
      );

      if (res.status === 400) {
        handleLoading?.(false);
        return toast.error(res.message);
      }

      console.log({ res });
      // const data = (await storesApi.getStores(
      //   `${res.latitude},${res.longitude}`,
      //   50
      // )) as CoffeeStoreProps[];
      // return handleCoffeeStores?.(data);
    } catch (err) {
      handleLoading?.(false);
      console.error({ err });
      if (err instanceof Error) {
        return toast.error(err.message);
      }
    }
  };

  const keydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-void
    if (e.code === 'Enter') void handleSubmit();
    if (e.code === 'Escape') setInputValue('');
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
      <fieldset className={styles.search} disabled={loading}>
        <input
          type="text"
          placeholder="Search by city name"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={keydownHandler}
        />
        <button type="submit" onClick={handleSubmit}>
          🔍
        </button>
      </fieldset>
    </div>
  );
};

export default Header;
