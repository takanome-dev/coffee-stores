import { CoffeeStoreProps } from '@components/types';

import Constants from './constants';
import { InitialState, Action } from './types';

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case Constants.COFFEE_STORES:
      return {
        ...state,
        coffeeStores: action.payload as CoffeeStoreProps[],
      };
    case Constants.LOADING:
      return {
        ...state,
        loading: action.payload as boolean,
      };
    default:
      return state;
  }
};

export default reducer;
