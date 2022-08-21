import Link from 'next/link';

import Meta from '@components/Meta';

import type { NextPage } from 'next';

const NotFound: NextPage = () => (
  <>
    <Meta
      title="Coffee Stores | 404 Not Found"
      description="404 Not Found Page"
      image="/static/not_found.webp"
    />
    <div className="not-found-container">
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for is not found</p>
        <button type="button">
          <Link href="/">⬅ Go Back Home</Link>
        </button>
      </div>
    </div>
  </>
);

export default NotFound;
