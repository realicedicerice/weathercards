import React from 'react';

import { observer } from 'mobx-react-lite';

import { ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import { WeatherApiContext } from './context/WeatherApiContext';
import { WeatherApi } from './api/WeatherApi';

import { AppStoreContext } from './context/AppStoreContext';
import { AppStore } from './store/AppStore';

import { MainScreen } from './screens/MainScreen';

import './App.css';

const weatherApi = new WeatherApi('02076de99c56467e9cc102641230809');
const appStore = AppStore.create({}, { weatherApi });

const App : React.FC = observer(() => {
  return (
    <>
      <CssBaseline />

      <div className='App'>
        <ThemeProvider theme={appStore.themeStore.theme}>
          <AppStoreContext.Provider value={appStore}>
            <WeatherApiContext.Provider value={weatherApi}>
              <MainScreen />
            </WeatherApiContext.Provider>
          </AppStoreContext.Provider>
        </ThemeProvider>
      </div>
    </>
  );
});

export { App }