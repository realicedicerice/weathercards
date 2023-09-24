import { Instance, types, flow } from 'mobx-state-tree';

import { ILocation } from '../interfaces/ILocation';

import { NetworkError } from '../errors/NetworkError';
import { HTTPError } from '../errors/HTTPError';

import { CurrentWeatherStore } from './CurrentWeatherStore';
import { LocationStore } from './LocationStore';
import { ForecastStore } from './ForecastStore';
import { ThemeStore } from './ThemeStore';

const AppStore = 
  types
    .model({
      onNetworkError : types.optional(types.boolean, false),

      currentWeatherStore : types.optional(CurrentWeatherStore, () => CurrentWeatherStore.create({})),

      locationStore : types.optional(LocationStore, () => LocationStore.create({})),

      forecastStore : types.optional(ForecastStore, () => ForecastStore.create({})),

      themeStore: types.optional(ThemeStore, () => ThemeStore.create({})),
    })
    .actions((self) => {
      const setOnNetworkError = (state : boolean) => {
        self.onNetworkError = state;
      }

      const setLocation = flow(function *(location : ILocation | null) {
        self.locationStore.setLocation(location);

        yield update();
      });

      const getCurrentWeather = flow(function *() {
        if (self.locationStore.location === null) {
          return;
        }
        
        try {
          const {
            location,
            current
          } = yield self.currentWeatherStore.getCurrentWeather(
            self.locationStore.location
          );

          self.locationStore.setLocation(location);
  
          self.themeStore.setCurrentWeather(current);
        } catch (error) {
          if (error instanceof NetworkError || error instanceof HTTPError) {
            setOnNetworkError(true);
          } else {
            throw error;
          }
        }
      });

      const getForecast = flow(function *() {
        if (self.locationStore.location === null) {
          return;
        }

        try {
          yield self.forecastStore.getForecast(self.locationStore.location);
        } catch (error) {
          if (error instanceof NetworkError || error instanceof HTTPError) {
            setOnNetworkError(true);
          } else {
            throw error;
          }
        }
      });

      const update = flow(function *() {
        yield getCurrentWeather();

        yield getForecast();
      });

      return {
        setLocation,
        getCurrentWeather,
        getForecast,
        setOnNetworkError,
        update,
      }
    });


export interface IAppStore extends Instance<typeof AppStore> {}

export { AppStore }