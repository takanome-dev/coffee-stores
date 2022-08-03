import { CoffeeStoreProps } from '@components/types';

import Constants from './constants';

export interface InitialState {
  coffeeStores: CoffeeStoreProps[];
  loading: boolean;
  handleCoffeeStores?: (stores: CoffeeStoreProps[]) => void;
  handleLoading?: (value: boolean) => void;
}

export interface Action {
  type: Constants;
  payload: any;
}
