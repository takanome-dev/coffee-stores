// export interface CoffeeStoreProps {
//   id?: number;
//   name?: string;
//   imgUrl?: string;
//   address?: string;
//   neighborhood?: string;
// }

export interface CoffeeStoreProps {
  fsq_id: string;
  name: string;
  imageUrl?: string;
  largeImageUrl?: string;
  mediumImageUrl?: string;
  geocodes?: {
    main: {
      latitude: number;
      longitude: number;
    };
  };
  link?: string;
  location: {
    address: string;
    country: string;
    cross_street: string;
    formatted_address: string;
    locality: string;
    postcode: string;
    region: string;
  };
  timezone: string;
}

export interface CoffeeStoreImage {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
}

export interface ApiResponse {
  results: CoffeeStoreProps[];
  context: {
    geo_bounds: {
      circle: {
        center: {
          latitude: number;
          longitude: number;
        };
        radius: number;
      };
    };
  };
}