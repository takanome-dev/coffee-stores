/* eslint-disable import/exports-last */
import React, { useReducer, createContext } from 'react';

import { CoffeeStoreProps } from '@components/types';

import Constants from './constants';
import reducer from './reducer';
import { InitialState } from './types';

interface Props {
  children: React.ReactNode;
}

export const initialState: InitialState = {
  coffeeStores: [],
  loading: false,
};

export const Context = createContext(initialState);

const Provider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCoffeeStores = (stores: CoffeeStoreProps[]) =>
    dispatch({
      type: Constants.COFFEE_STORES,
      payload: stores,
    });

  const handleLoading = (value: boolean) =>
    dispatch({
      type: Constants.LOADING,
      payload: value,
    });

  const value = {
    coffeeStores: state.coffeeStores,
    loading: state.loading,
    handleCoffeeStores,
    handleLoading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
