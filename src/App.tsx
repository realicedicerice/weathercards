import React, { useEffect } from 'react';

import { autorun } from 'mobx';

import { ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import { WeatherApiContext } from './context/WeatherApiContext';
import { WeatherApi } from './api/WeatherApi';

import { AppStoreContext } from './context/AppStoreContext';
import { AppStore } from './store/AppStore';

import { useStateThemeFromWeatherCondition } from './hooks/useStateThemeFromWeatherCondition';

import { MainScreen } from './screens/MainScreen';

import './App.css';

const weatherApi = new WeatherApi('02076de99c56467e9cc102641230809');
const appStore = AppStore.create({
  currentWeather: null,
  location: null,
  forecast: null,
}, { weatherApi });

const App : React.FC = () => {
  const [theme, setCondition] = useStateThemeFromWeatherCondition();

  useEffect(() => {
    return autorun(() => {
      const { currentWeather } = appStore;

      if (currentWeather !== null) {
        setCondition(currentWeather);
      }
    });
  }, [setCondition]);

  return (
    <>
      <CssBaseline />

      <div className='App'>
        <ThemeProvider theme={theme}>
          <AppStoreContext.Provider value={appStore}>
            <WeatherApiContext.Provider value={weatherApi}>
              <MainScreen />
            </WeatherApiContext.Provider>
          </AppStoreContext.Provider>
        </ThemeProvider>
      </div>
    </>
  );
}

export { App }