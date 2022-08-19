import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

import { Context } from '@context/Provider';
import useImage from '@hooks/useImage';
import styles from '@styles/CoffeeStore.module.css';
import { fallbackImage } from '@utils/constants';

import Header from './Header';

const CoffeeStore = ({ id }: { id: string }) => {
  const [photo, setPhoto] = useState(fallbackImage);
  const { coffeeStores } = useContext(Context);
  // console.log({ coffeeStores });
  const coffeeStore = coffeeStores.find((c) => c.fsq_id === id);

  const { imageUrls } = useImage(coffeeStore?.photos!);
  // console.log({ imageUrls, photo });

  useEffect(() => {
    setPhoto(imageUrls[0]);
  }, [imageUrls]);

  return (
    <div className="container">
      <Header name={coffeeStore?.name} />
      <div className={styles.cardContainer}>
        <div className={styles.cardImg}>
          <Image
            src={photo}
            alt={coffeeStore?.name}
            width="100%"
            height="100%"
            layout="responsive"
          />
          {imageUrls.length > 2 && (
            <div className={styles.cardImages}>
              <Image
                src={imageUrls[1]}
                alt={coffeeStore?.name}
                width="100%"
                height="100%"
                layout="responsive"
              />
              {imageUrls[2] && (
                <Image
                  src={imageUrls[2]}
                  alt={coffeeStore?.name}
                  width="100%"
                  height="100%"
                  layout="responsive"
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
          <p>⏲️ Hours: &nbsp; {coffeeStore?.hours.display}</p>
          <p>
            👁️ State: &nbsp; {coffeeStore?.hours.open_now ? 'Open' : 'Close'}
          </p>
          {coffeeStore?.rating && (
            <p>⭐ Ratings: &nbsp; {coffeeStore?.rating}</p>
          )}
          <p>📞 Tel: &nbsp; {coffeeStore?.tel}</p>
          {coffeeStore?.social_media &&
            Object.keys(coffeeStore?.social_media).length && (
              <div className={styles.social_media}>
                {coffeeStore?.social_media.facebook_id && (
                  <p>
                    😶 Facebook ID: &nbsp;
                    <span>{coffeeStore?.social_media.facebook_id}</span>
                  </p>
                )}
                {coffeeStore?.social_media.twitter && (
                  <p>
                    🐦 Twitter: &nbsp;
                    <span>@{coffeeStore?.social_media.twitter}</span>
                  </p>
                )}
                {coffeeStore?.social_media.instagram && (
                  <p>
                    📸 Instagram: &nbsp;
                    <span>@{coffeeStore?.social_media.instagram}</span>
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
