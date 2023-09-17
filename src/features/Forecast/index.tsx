import React, { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { observer } from 'mobx-react-lite';

import { useAppStore } from '../../hooks/useAppStore';
import { ForecastDay } from './components/ForecastDay';

const Forecast : React.FC = observer(() => {
  const appStore = useAppStore();

  useEffect(() => {
    appStore.getForecast();
  }, [appStore]);

  return appStore.forecast === null ? (
    <>
      <Typography>Please select your location</Typography>
    </>
  ) : (
    <Grid container wrap='nowrap' maxWidth='100%'>
      {
        appStore.forecast.map(
          (forecastDay, i, arr) => <React.Fragment key={forecastDay.date_epoch}>
            <Grid xs={12} item>
              <ForecastDay forecastDay={forecastDay}/>
            </Grid>

            {i !== arr.length - 1 ? <Divider orientation='vertical' flexItem/> : null}
          </React.Fragment>
        )
      }
    </Grid>
  );
});

export { Forecast }