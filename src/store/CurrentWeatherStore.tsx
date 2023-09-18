import { Instance, types, flow, getEnv } from 'mobx-state-tree';

import { ICurrent } from '../interfaces/ICurrent';
import { ILocation } from '../interfaces/ILocation';
import { AppStoreEnv } from './AppStoreEnv';

const CurrentWeatherStore = 
  types
    .model({
      currentWeather: types.optional(
        types.maybeNull(
          types.frozen<ICurrent>()
        ), 
        null
      )
    })
    .actions((self) => {
      const getCurrentWeather = flow(function *(location : ILocation) {
        const result : {
          current : ICurrent,
          location : ILocation,
        } = yield getEnv<AppStoreEnv>(self).weatherApi.current(
          `${location.lat},${location.lon}`,
        );

        self.currentWeather = result.current;
        
        return result;
      });

      return {
        getCurrentWeather
      }
    });

export { CurrentWeatherStore }