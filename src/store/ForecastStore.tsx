import { Instance, types, flow, getEnv } from 'mobx-state-tree';

import { IForecastDay } from '../interfaces/IForecastDay';
import { ILocation } from '../interfaces/ILocation';
import { AppStoreEnv } from './AppStoreEnv';

const ForecastStore = 
  types
    .model({
      forecast: types.optional(
        types.maybeNull(
          types.frozen<Array<IForecastDay>>()
        ),
        null,
      )
    })
    .actions((self) => {
      const getForecast = flow(function *(location : ILocation) {
        const result : Array<IForecastDay> = yield getEnv<AppStoreEnv>(self).weatherApi.forecast(
          `${location.lat},${location.lon}`,
          3
        );

        self.forecast = result;
      });

      return {
        getForecast
      }
    });

export { ForecastStore }