import React, { useEffect, useState, useCallback } from 'react';

import { SwiperClass } from 'swiper/react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

interface MainButtonsProps {
  onClickSetIndex : (index : number) => void,

  swiper : SwiperClass,
}

const MainButtons : React.FC<MainButtonsProps> = ({ onClickSetIndex, swiper }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndexChange = useCallback((swiper : SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  useEffect(() => {
    swiper.on('activeIndexChange', handleActiveIndexChange);

    return () => {
      swiper.off('activeIndexChange', handleActiveIndexChange);
    }
  }, [swiper, handleActiveIndexChange]);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Button
          variant='text'
          onClick={() => onClickSetIndex(0)}
          sx={{ opacity: activeIndex === 0 ? 1 : 0.5 }}
          fullWidth
        >
          Now
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant='text'
          onClick={() => onClickSetIndex(1)}
          sx={{ opacity: activeIndex === 1 ? 1 : 0.5 }}
          fullWidth
        >
          Forecast
        </Button>
      </Grid>
    </Grid>
  );
}

export { MainButtons }