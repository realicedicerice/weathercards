import { Instance, types, flow, getEnv } from 'mobx-state-tree';

import { ILocation } from '../interfaces/ILocation';

const LocationStore =
  types
    .model({
      location: types.optional(
        types.maybeNull(
          types.frozen<ILocation>()
        ),
        null
      )
    })
    .actions((self) => ({
      setLocation(locaiton : ILocation | null) {
        self.location = locaiton
      }
    }));

export { LocationStore }