import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import useImage from '@hooks/useImage';
import styles from '@styles/CoffeeStore.module.css';
import { fallbackImage } from '@utils/constants';

import Header from './Header';
import Skeleton from './Skeleton';
import { CoffeeStoreProps } from './types';

const CoffeeStore = ({ coffeeStore }: { coffeeStore: CoffeeStoreProps }) => {
  const router = useRouter();
  const [photo, setPhoto] = useState(fallbackImage);

  const { imageUrls } = useImage(coffeeStore?.photos);

  useEffect(() => {
    setPhoto(imageUrls[0]);
  }, [imageUrls]);

  if (router.isFallback) {
    return <Skeleton />;
  }

  return (
    <div className="container">
      <Header name={coffeeStore?.name} />
      <div className={styles.cardContainer}>
        <div className={styles.cardImagesContainer}>
          <div className={styles.cardImage}>
            <Image
              src={photo}
              alt={coffeeStore?.name}
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          {imageUrls.length > 2 && (
            <div className={styles.cardThumbnailImages}>
              <Image
                src={imageUrls[1]}
                alt={coffeeStore?.name}
                width="100%"
                height="100%"
                layout="responsive"
                onClick={() => setPhoto(imageUrls[1])}
              />
              {imageUrls[2] && (
                <Image
                  src={imageUrls[2]}
                  alt={coffeeStore?.name}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  onClick={() => setPhoto(imageUrls[2])}
                />
              )}
              {imageUrls[3] && (
                <Image
                  src={imageUrls[3]}
                  alt={coffeeStore?.name}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  onClick={() => setPhoto(imageUrls[3])}
                />
              )}
            </div>
          )}
        </div>
        <div className={styles.cardContent}>
          <h2 className={styles.name}>☕ &nbsp;&nbsp;{coffeeStore?.name}</h2>
          <p className={styles.address}>
            🌐 Address: &nbsp; {coffeeStore?.location.address}
          </p>
          <p className={styles.locality}>
            🇻🇦 Locality: &nbsp; {coffeeStore?.location.locality}
          </p>
          <p className={styles.country}>
            🏁 Country: &nbsp; {coffeeStore?.location.country}
          </p>
          {coffeeStore?.hours.display && (
            <p>⏲️ Hours: &nbsp; {coffeeStore?.hours.display}</p>
          )}
          <p>
            👁️ State: &nbsp; {coffeeStore?.hours.open_now ? 'Open' : 'Close'}
          </p>
          {coffeeStore?.rating && (
            <p>⭐ Ratings: &nbsp; {coffeeStore?.rating}</p>
          )}
          {coffeeStore?.tel && <p>📞 Tel: &nbsp; {coffeeStore?.tel}</p>}
          {coffeeStore?.email && <p>📫 Email: &nbsp; {coffeeStore?.email}</p>}
          {coffeeStore?.website && (
            <p>
              🔗 Website: &nbsp;{' '}
              <a
                href={`${coffeeStore?.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {coffeeStore?.website}
              </a>
            </p>
          )}
          {coffeeStore?.social_media &&
            Object.keys(coffeeStore?.social_media).length && (
              <div className={styles.social_media}>
                {coffeeStore?.social_media.facebook_id && (
                  <p>
                    💬 Facebook: &nbsp;
                    <a
                      href={`https://web.facebook.com/${coffeeStore?.social_media.facebook_id}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{coffeeStore?.name}
                    </a>
                  </p>
                )}
                {coffeeStore?.social_media.twitter && (
                  <p>
                    🐦 Twitter: &nbsp;
                    <a
                      href={`https://twitter.com/${coffeeStore?.social_media.twitter}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{coffeeStore?.social_media.twitter}
                    </a>
                  </p>
                )}
                {coffeeStore?.social_media.instagram && (
                  <p>
                    📸 Instagram: &nbsp;
                    <a
                      href={`https://www.instagram.com/${coffeeStore?.social_media.instagram}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{coffeeStore?.social_media.instagram}
                    </a>
                  </p>
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
