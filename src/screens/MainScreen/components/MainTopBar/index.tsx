import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import RefreshIcon from '@mui/icons-material/Refresh';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import { useAppStore } from '../../../../hooks/useAppStore';

const MainTopBar : React.FC = observer(() => {
  const appStore = useAppStore();

  const [timeText, setTimeText] = useState('');

  useEffect(() => {
    if (
      appStore.location === null
      || !appStore.location.tz_id
      || appStore.currentWeather === null
    ) {
      return;
    }

    setTimeText(
      format(
        utcToZonedTime(
          new Date(appStore.currentWeather.last_updated_epoch * 1000),
          appStore.location.tz_id || ''
        ), 
        'MMM do h:mm a'
      )
    );
  }, [appStore.location, appStore.currentWeather]);

  return (
    <Box sx={{
      position: 'relative',
      height: '3.25em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    
    margin={1}
    >
      {appStore.currentWeather !== null && appStore.location !== null && <>
        <IconButton
          sx={{ position: 'absolute', top: 0, left: 0 }}
          onClick={() => {
            appStore.getForecast();
            appStore.getCurrentWeather();
          }}
        >
          <RefreshIcon sx={{ fontSize: '1.5em' }} />
        </IconButton>
        
        <Typography fontWeight={500} fontSize='1.2em'>
          {timeText}
        </Typography>
      </>}

    </Box>
  );
});

export { MainTopBar }