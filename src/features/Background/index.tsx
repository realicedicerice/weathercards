import React, { useEffect, useState } from 'react';

import { autorun } from 'mobx';

import { useAppStore } from '../../hooks/useAppStore';

import { getPaletteByCondition } from '../../util/getPaletteByCondition';

import { ICurrent } from '../../interfaces/ICurrent';

import styles from './index.module.css';

const Background : React.FC = () => {
  const appStore = useAppStore();

  const [currentWeather, setCurrentWeather] = useState<ICurrent | null>(null);
  const [parity, setParity] = useState<number>(0);
  const [background, setBackground] = useState<Array<string>>([
    '#FFFFFF',
    '#FFFFFF',
  ]);

  useEffect(() => {
    return autorun(() => {
      if (JSON.stringify(appStore.currentWeather) !== JSON.stringify(currentWeather)) {
        const newBackground = [...background];

        if (appStore.currentWeather === null) {
          newBackground[parity ^ 1] = '#FFFFFF';
        } else {
          const palette = getPaletteByCondition(
            appStore.currentWeather.condition.code,
            appStore.currentWeather.is_day === 1
          );

          newBackground[parity ^ 1] = `linear-gradient(
              45deg,
              ${palette.gradient1} 0%,
              ${palette.gradient2} 100%
            )
          `;
        }

        setBackground(newBackground);
        setCurrentWeather(appStore.currentWeather);
        setParity(parity ^ 1);
      }
    });
  }, [appStore, currentWeather, parity, background]);


  return (
    <>
      <div
        className={styles.backgroundElement}
        style={{
          background: background[0],
          opacity: parity === 0 ? 1 : 0,
        }}
      >
      </div>

      <div
        className={styles.backgroundElement}
        style={{
          background: background[1],
          opacity: parity === 1 ? 1 : 0,
        }}
      >
      </div>
    </>
  );
};

export { Background }