import { CoffeeStoreProps } from '@components/types';
import React, { useReducer, createContext } from 'react';
import Constants from './constants';
import reducer from './reducer';
import { InitialState } from './types';

interface Props {
  children: React.ReactNode;
}

export const initialState: InitialState = {
  coffeeStores: [],
};

export const Context = createContext(initialState);

const Provider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCoffeeStores = (stores: CoffeeStoreProps[]) =>
    dispatch({
      type: Constants.COFFEE_STORES,
      payload: stores,
    });

  const value = {
    coffeeStores: state.coffeeStores,
    handleCoffeeStores,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
