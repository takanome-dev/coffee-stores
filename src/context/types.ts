import { CoffeeStoreProps } from '@components/types';
import Constants from './constants';

export interface InitialState {
  coffeeStores: CoffeeStoreProps[];
  handleCoffeeStores?: (stores: CoffeeStoreProps[]) => void;
}

export interface Action {
  type: Constants;
  payload: any;
}
