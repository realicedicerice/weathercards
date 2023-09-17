import { createContext } from 'react';

import { IAppStore } from '../store/AppStore';

const AppStoreContext = createContext<IAppStore | null>(null);

export { AppStoreContext }