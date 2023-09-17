import { useContext } from 'react';

import { IAppStore } from '../store/AppStore';

import { AppStoreContext } from '../context/AppStoreContext';

import { ContextValueNotProvidedError } from '../errors/ContextValueNotProvidedError';

const useAppStore = () : IAppStore => {
  const appStoreContext = useContext(AppStoreContext);

  if (appStoreContext === null) {
    throw new ContextValueNotProvidedError();
  }

  return appStoreContext;
}

export { useAppStore }