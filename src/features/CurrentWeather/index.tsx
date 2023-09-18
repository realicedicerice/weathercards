import React from 'react'

import { observer } from 'mobx-react-lite';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { ReactComponent as WiHumidity } from '../../assets/svg/wi-humidity.svg';
import { ReactComponent as WiUmbrella } from '../../assets/svg/wi-umbrella.svg';
import { ReactComponent as WiWindDeg } from '../../assets/svg/wi-wind-deg.svg';

import { WeatherConditionIcon } from '../../components/WeatherConditionIcon';

import { useAppStore } from '../../hooks/useAppStore';

import { formatTemperature } from '../../util/formatTemperature';

import { useTheme } from '@mui/material';

import styles from './index.module.css';

const CurrentWeather : React.FC = observer(() => {
  const { currentWeatherStore } = useAppStore();

  const theme = useTheme();

  return currentWeatherStore.currentWeather === null ? (
    <>
      <Typography>Please select your location</Typography>
    </>
  ) : (
    <>
      <Grid container direction='column' alignItems='center' justifyContent='center'>
        <Grid item position='absolute' marginBottom={46}>
          <WeatherConditionIcon
            conditionCode={currentWeatherStore.currentWeather.condition.code}
            variant={currentWeatherStore.currentWeather.is_day === 1 ? 'day' : 'night'}
            size='big'
          />
        </Grid>

        <Grid item>
          <Typography
            sx={{
              fontSize: '7em',
              '--gradient1': theme.palette.gradient1.main,
              '--gradient2': theme.palette.gradient2.main,
              '--primary': theme.palette.primary.main,
              '--overlay': `${theme.palette.primary.main}22`,
              fontFamily: 'ReglisseFill',
            }}
            lineHeight={1}
            className={styles.temperatureLabel}
          >
            {formatTemperature(currentWeatherStore.currentWeather.temp_c)}
          </Typography>
          <Typography sx={{ fontSize: '1.3em' }} lineHeight={1}>
            Feels like {formatTemperature(currentWeatherStore.currentWeather.feelslike_c)}
          </Typography>
        </Grid>

        <Grid item container justifyContent='space-evenly'>
          <Grid item>
            <Typography lineHeight={4} fontWeight={500}>
              <WiUmbrella
                fill={theme.palette.primary.main}
                style={{display: 'inline-block', height: '40px', verticalAlign: 'middle'}}/>
              {currentWeatherStore.currentWeather.precip_mm} mm
            </Typography>
          </Grid>

          <Grid item>
            <Typography lineHeight={4} fontWeight={500}>
              <WiHumidity 
                fill={theme.palette.primary.main}
                style={{display: 'inline-block', height: '40px', verticalAlign: 'middle'}}/>
              {currentWeatherStore.currentWeather.humidity}%
            </Typography>
          </Grid>

          <Grid item>
            <Typography lineHeight={4} fontWeight={500}>
              <WiWindDeg
                style={{
                  display: 'inline-block',
                  height: '40px',
                  verticalAlign: 'middle', 
                  transform: `rotate(${currentWeatherStore.currentWeather.wind_degree}deg)`
                }}
                fill={theme.palette.primary.main}
              />
              {currentWeatherStore.currentWeather.wind_kph} km/h              
            </Typography>
          </Grid>
        </Grid>


        <Grid item>
          <Typography sx={{ fontSize: '1.5em' }}>
            {currentWeatherStore.currentWeather.condition.text}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
});

export { CurrentWeather }