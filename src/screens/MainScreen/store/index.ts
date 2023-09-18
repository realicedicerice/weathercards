import { action, computed, makeObservable, observable, reaction } from 'mobx';

import { getSnapshot } from 'mobx-state-tree';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import { ILocation } from '../../../interfaces/ILocation';

import { IAppStore } from '../../../store/AppStore';

class MainScreenStore {
  timeText = ''

  constructor(private appStore : IAppStore) {
    makeObservable(this, {
      timeText: observable,
      isTopBarVisible: computed,
      update: action,
    });

    reaction(
      () => appStore.locationStore.location,
      (location : ILocation | null) => {
        const { currentWeather } = getSnapshot(appStore.currentWeatherStore);

        if (currentWeather !== null && location !== null && location.tz_id) {

          this.timeText = format(
            utcToZonedTime(
              new Date(currentWeather.last_updated_epoch * 1000),
              location.tz_id,
            ), 
            'MMM do h:mm a'
          );
          
        }
      },
    );
  }

  get isTopBarVisible() : boolean {
    return this.appStore.locationStore.location !== null
      && this.appStore.currentWeatherStore.currentWeather !== null;
  }

  update() {
    return this.appStore.update();
  }
}

export { MainScreenStore }