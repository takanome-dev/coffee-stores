import { useRouter } from 'next/router';
import React from 'react';

import styles from '@styles/Pagination.module.css';

import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
  pages,
  totalPages,
  pageNumber,
  setPageNumber,
}) => {
  const router = useRouter();

  const handleChange = (page: number) => {
    setPageNumber(page);
    // eslint-disable-next-line no-void
    return void router.push({
      pathname: '/coffee-stores',
      query: `page=${page}`,
    });
  };

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        onClick={() => handleChange(pageNumber - 1)}
        data-disabled={pageNumber <= 1}
      >
        ⬅ Prev
      </button>
      {pages.map((page) => (
        <button
          type="button"
          onClick={() => handleChange(page)}
          key={page}
          data-active={page === pageNumber}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => handleChange(pageNumber + 1)}
        data-disabled={pageNumber >= totalPages}
      >
        Next ➡️
      </button>
    </div>
  );
};

export default Pagination;
