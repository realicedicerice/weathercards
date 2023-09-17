import { Instance, types, flow, getEnv } from 'mobx-state-tree';

import { ICurrent } from '../interfaces/ICurrent';
import { ILocation } from '../interfaces/ILocation';
import { IForecastDay } from '../interfaces/IForecastDay';

import { WeatherApi } from '../api/WeatherApi';

import { NetworkError } from '../errors/NetworkError';
import { HTTPError } from '../errors/HTTPError';

const AppStore = 
  types
    .model({
      location : types.maybeNull(types.frozen<ILocation>()),

      currentWeather : types.maybeNull(types.frozen<ICurrent>()),

      forecast : types.maybeNull(types.frozen<Array<IForecastDay>>()),

      onNetworkError : types.optional(types.boolean, false),
    })
    .actions((self) => {
      const setLocation = (newLocation : ILocation | null) => {
        self.location = newLocation;

        getCurrentWeather();

        getForecast();
      }

      const setOnNetworkError = (state : boolean) => {
        self.onNetworkError = state;
      }

      const getCurrentWeather = flow(function *() {
        if (self.location === null) {
          self.currentWeather = null;

          return;
        }

        try {
          const { current, location } : {
            current : ICurrent,
            location : ILocation,
          } = yield getEnv<AppStoreEnv>(self).weatherApi.current(
            `${self.location.lat},${self.location.lon}`,
          );

          self.currentWeather = current;
          self.location = location;
        } catch (e) {
          if (e instanceof NetworkError || e instanceof HTTPError) {
            setOnNetworkError(true);

            return;
          }

          throw e;
        }
      });

      const getForecast = flow(function *() {
        if (self.location === null) {
          self.forecast = null;

          return;
        }

        let forecast;

        try {
          forecast = yield getEnv<AppStoreEnv>(self).weatherApi.forecast(
            `${self.location.lat},${self.location.lon}`,
            3,
          );
        } catch (e) {
          if (e instanceof NetworkError || e instanceof HTTPError) {
            setOnNetworkError(true);

            return;
          }

          throw e;
        }

        self.forecast = forecast;
      });

      return {
        setLocation,
        getCurrentWeather,
        getForecast,
        setOnNetworkError,
      }
    });


export interface IAppStore extends Instance<typeof AppStore> {}

export interface AppStoreEnv {
  weatherApi : WeatherApi
}

export { AppStore }