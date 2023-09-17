import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { format } from 'date-fns';

import { WeatherConditionIcon } from '../../../../components/WeatherConditionIcon';

import { formatTemperature } from '../../../../util/formatTemperature';

import { IForecastDay } from '../../../../interfaces/IForecastDay';

interface ForecastDayProps {
  forecastDay : IForecastDay
}

const ForecastDay : React.FC<ForecastDayProps> = ({ forecastDay }) => {
  return (
    <Grid container height='100%' alignItems='center' direction='column'>
      <Grid item>
        <Typography>
          {format(
            new Date(forecastDay.date_epoch * 1000),
            'iiii',
          )}
        </Typography>
      </Grid>

      <Grid item>
        <WeatherConditionIcon
          conditionCode={forecastDay.day.condition.code}
          isDay={true}
          variant='small'
        />
      </Grid>

      <Grid item>
        <Typography sx={{ fontSize: '2em' }} lineHeight={1}>
          {formatTemperature(forecastDay.day.avgtemp_c)}
        </Typography>
      </Grid>

      <Grid item container justifyContent='space-between' paddingX={2}>
        <Grid item fontWeight={700}>
          Hi
        </Grid>

        <Grid item>
          {formatTemperature(forecastDay.day.maxtemp_c)}
        </Grid>
      </Grid>

      <Grid item container justifyContent='space-between' paddingX={2}>
        <Grid item fontWeight={700}>
          Lo
        </Grid>

        <Grid item>
          {formatTemperature(forecastDay.day.mintemp_c)}
        </Grid>
      </Grid>

      <Grid item marginY='auto'>
        <Typography>
          {forecastDay.day.condition.text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export { ForecastDay }