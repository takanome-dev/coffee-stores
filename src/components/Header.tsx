import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Context } from '@context/Provider';
import useLocation from '@hooks/useLocation';
import styles from '@styles/Header.module.css';
import http from '@utils/http';

import { CoffeeStoreProps, HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ name = '' }) => {
  const { handleCoffeeStores, handleLoading } = useContext(Context);
  const { error, coords, handleGetGeoLocation } = useLocation();

  useEffect(() => {
    // eslint-disable-next-line no-void
    void (async () => {
      if (!coords) {
        return;
      }

      handleLoading?.(true);
      try {
        const data = await http<CoffeeStoreProps[]>(
          '/api/getStoresNearby',
          'POST',
          { coords }
        );
        handleCoffeeStores?.(data);
      } catch (err) {
        console.error(err);
      }

      handleLoading?.(false);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  if (error) toast.error(error);

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
      {!name && (
        <button
          type="button"
          className={styles.button}
          onClick={handleGetGeoLocation}
        >
          Find stores nearby
        </button>
      )}
    </div>
  );
};

export default React.memo(Header);
