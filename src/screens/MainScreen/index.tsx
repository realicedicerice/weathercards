import React, { useState, useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Search } from '../../features/Search';
import { CurrentWeather } from '../../features/CurrentWeather';
import { Forecast } from '../../features/Forecast';
import { Background } from '../../features/Background';
import { ErrorAlert } from '../../features/ErrorAlert';

import { MainButtons } from './components/MainButtons';
import { MainTopBar } from './components/MainTopBar';

import { useAppStore } from '../../hooks/useAppStore';

import { MainScreenStore } from './store';

import styles from './index.module.css';

const MainScreen : React.FC = observer(() => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const appStore = useAppStore();

  const mainScreenStore = useMemo(
    () => new MainScreenStore(appStore),
    [appStore],
  );

  return (
    <>
      <Background />

      <ErrorAlert />

      <Grid container direction='column' sx={{ height: '100%', position: 'relative', zIndex: 1 }}>

        <Grid item>
          <MainTopBar mainScreenStore={mainScreenStore} />
        </Grid>

        <Grid item sx={{ position: 'absolute', top: '50%', left: '0', right: '0', transform: 'translateY(-50%)' }}>
          <Swiper onSwiper={(newSwiper) => setSwiper(newSwiper)} style={{height: '500px'}}>

            <SwiperSlide className={styles.swiperSlide}>
              <CurrentWeather />
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              <Forecast />
            </SwiperSlide>

          </Swiper>
        </Grid>

        <Grid item padding={1} marginTop='auto'>
          {swiper && <MainButtons
            swiper={swiper}
            onClickSetIndex={(index : number) => swiper?.slideTo?.(index)}
          />}
        </Grid>

        <Grid item padding={1}>
          <Search />
        </Grid>

      </Grid>
    </>
  );
});

export { MainScreen }