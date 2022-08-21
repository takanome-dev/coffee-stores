import { useState } from 'react';

export default function useLocation() {
  const [coords, setCoords] = useState('');
  const [error, setError] = useState('');

  const successHandler = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setError('');
    setCoords(`${latitude},${longitude}`);
  };

  const errorHandler = (_error: GeolocationPositionError) => {
    console.error(_error);
    setError('Unable to retrieve your location, access denied!');
  };

  const handleGetGeoLocation = () => {
    if (!navigator.geolocation) {
      return setError('Geolocation is not supported by your browser');
    }

    return navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler
    );
  };

  return {
    coords,
    error,
    handleGetGeoLocation,
  };
}
