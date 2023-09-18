import React, { useEffect, useState } from 'react';

import { reaction } from 'mobx';

import { useAppStore } from '../../hooks/useAppStore';

import { getPaletteByCondition } from '../../util/getPaletteByCondition';

import styles from './index.module.css';

const Background : React.FC = () => {
  const { currentWeatherStore } = useAppStore();

  const [parity, setParity] = useState<number>(0);
  const [background, setBackground] = useState<Array<string>>([
    '#FFFFFF',
    '#FFFFFF',
  ]);

  useEffect(() => {

    return reaction(
      () => currentWeatherStore.currentWeather,
      (currentWeather) => {
        const newBackground = [...background];

        if (currentWeather === null) {
          newBackground[parity ^ 1] = '#FFFFFF';
        } else {
          const palette = getPaletteByCondition(
            currentWeather.condition.code,
            currentWeather.is_day === 1
          );

          newBackground[parity ^ 1] = `linear-gradient(
              45deg,
              ${palette.gradient1} 0%,
              ${palette.gradient2} 100%
            )
          `;
        }

        setBackground(newBackground);
        setParity(parity ^ 1);
      },
    );

  }, [currentWeatherStore, parity, background]);


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