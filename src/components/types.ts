export interface CoffeeStoreProps {
  fsq_id: string;
  date_closed: string;
  description: string;
  email: string;
  fax: string;
  geocodes: {
    main: {
      latitude: number;
      longitude: number;
    };
  };
  hours: {
    display: string;
    is_local_holiday: boolean;
    open_now: boolean;
    regular: [
      {
        close: string;
        day: number;
        open: string;
      }
    ];
    seasonal: [
      {
        closed: boolean;
        end_date: string;
        hours: [
          {
            close: string;
            day: number;
            open: string;
          }
        ];
        start_date: string;
      }
    ];
  };
  hours_popular: [
    {
      close: string;
      day: number;
      open: string;
    }
  ];
  location: {
    address: string;
    address_extended: string;
    admin_region: string;
    country: string;
    cross_street: string;
    formatted_address: string;
    locality: string;
    neighborhood: [];
    po_box: string;
    post_town: string;
    postcode: string;
    region: string;
  };
  menu: string;
  name: string;
  photos: {
    id: string;
    created_at: string;
    prefix: string;
    suffix: string;
    width: number;
    height: number;
    classifications: [];
    tip: {
      id: string;
      created_at: string;
      text: string;
      url: string;
      lang: string;
      agree_count: number;
      disagree_count: number;
    };
  }[];
  popularity: number;
  price: number;
  rating: number;
  related_places: {
    children: [];
  };
  social_media: {
    facebook_id: string;
    instagram: string;
    twitter: string;
  };
  tastes: [];
  tel: string;
  timezone: string;
  tips: {
    id: string;
    created_at: string;
    text: string;
    url: string;
    lang: string;
    agree_count: number;
    disagree_count: number;
  }[];
  website: string;
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

export interface Cities {
  country_code: string;
  region_name: string;
  city_name: string;
  geonameid: number;
}
export interface RapidApiResponse {
  geonameid: number;
  name: string;
  population: number;
  latitude: number;
  longitude: number;
  status: string | number;
  message?: string;
}

export interface PaginationProps {
  pages: number[];
  totalPages: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface HeaderProps {
  name?: string;
}
