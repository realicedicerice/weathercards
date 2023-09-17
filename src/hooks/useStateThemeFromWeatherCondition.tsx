import { useState, useMemo, useCallback } from 'react';

import { getPaletteByCondition } from '../util/getPaletteByCondition';

import { IPalette } from '../interfaces/IPalette';
import { ICurrent } from '../interfaces/ICurrent';

import { createTheme, Theme } from '@mui/material';

export function useStateThemeFromWeatherCondition() : [Theme, (current : ICurrent) => void] {
  const [palette, setPalette] = useState<IPalette>(getPaletteByCondition(0, true));

  return [

    useMemo<Theme>(() => {
      if (palette === null) {
        return createTheme({});
      }

      console.log(palette);

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
    }, [palette]),

    useCallback((current : ICurrent) => {
      setPalette(getPaletteByCondition(
        current.condition.code,
        current.is_day === 1
      ));
    }, []),

  ];
}