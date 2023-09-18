import React from 'react';

import { observer } from 'mobx-react-lite';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import RefreshIcon from '@mui/icons-material/Refresh';

import { MainScreenStore } from '../../store';

interface MainTopBarProps {
  mainScreenStore : MainScreenStore
}

const MainTopBar : React.FC<MainTopBarProps> = observer(({ mainScreenStore }) => {
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
      {
        mainScreenStore.isTopBarVisible && <>
          <IconButton
            sx={{ position: 'absolute', top: 0, left: 0 }}
            onClick={() => {
              mainScreenStore.update();
            }}
          >
            <RefreshIcon sx={{ fontSize: '1.5em' }} />
          </IconButton>
          
          <Typography fontWeight={500} fontSize='1.2em'>
            {mainScreenStore.timeText}
          </Typography>
        </>
      }

    </Box>
  );
});

export { MainTopBar }