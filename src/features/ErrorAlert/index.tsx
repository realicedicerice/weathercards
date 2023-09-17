import React from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import SignalCellularConnectedNoInternet0BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet0Bar';
import CloseIcon from '@mui/icons-material/Close';

import { observer } from 'mobx-react-lite';

import { useAppStore } from '../../hooks/useAppStore';

const ErrorAlert : React.FC = observer(() => {
  const appStore = useAppStore();

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2 }} padding={1}>
      <Collapse in={appStore.onNetworkError}>
        <Alert
          action={
            <IconButton
              onClick={() => {
                appStore.setOnNetworkError(false);
              }}
              size='small'
            >
              <CloseIcon />
            </IconButton>
          }
          icon={
            <SignalCellularConnectedNoInternet0BarIcon />
          }
          severity='error'
          sx={{ mb: 2 }}
        >
          Sorry, network error occured
        </Alert>
      </Collapse>
    </Box>
  );
});

export { ErrorAlert }