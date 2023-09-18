import { Instance, types, flow, getEnv } from 'mobx-state-tree';

import { createTheme, Theme } from '@mui/material';
import { ICurrent } from '../interfaces/ICurrent';
import { getPaletteByCondition } from '../util/getPaletteByCondition';

const ThemeStore =
  types
    .model({
      currentWeather : types.optional(
        types.maybeNull(
          types.frozen<ICurrent>(),
        ),
        null,
      ),
    })
    .actions((self) => ({
      setCurrentWeather(currentWeather : ICurrent) {
        self.currentWeather = currentWeather;
      },
    }))
    .views((self) => ({
      get theme() : Theme {
        const palette = self.currentWeather !== null ? getPaletteByCondition(
          self.currentWeather.condition.code,
          self.currentWeather.is_day === 1
        ) : getPaletteByCondition(0, true);

        return createTheme({
          palette: {
            mode: palette.mode,
            primary: {
              main: palette.primary,
            },
            secondary: {
              main: palette.primary,
            },
          },
          typography: {
            allVariants: {
              color: palette.textColor
            }
          }
        });
      },
    }));

export { ThemeStore }