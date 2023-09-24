import React, { useState, useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

import { debounce } from '@mui/material/utils';

import { useWeatherApi } from '../../hooks/useWeatherApi';
import { useAppStore } from '../../hooks/useAppStore';

import { ILocation } from '../../interfaces/ILocation';

import { formatLocation } from '../../util/formatLocation';

import { NetworkError } from '../../errors/NetworkError';
import { HTTPError } from '../../errors/HTTPError';

const Search : React.FC = observer(() => {
  const [options, setOptions] = useState<Array<ILocation>>([]);

  const weatherApi = useWeatherApi();
  const appStore = useAppStore();

  const handleInput = useMemo(() => debounce(async (q : string) => {
    if (!q) {
      setOptions([]);

      return;
    }

    try {
      const result = await weatherApi.search(q);

      setOptions(result);
    } catch (error) {
      if (error instanceof NetworkError || error instanceof HTTPError) {
        appStore.setOnNetworkError(true);

        return;
      }

      throw error;
    }
  }, 200), [weatherApi]);

  const handleChange = (newLocation : ILocation | null) => {
    if (newLocation === null) {
      return
    }
    
    appStore.setLocation(newLocation);
  }

  return (
    <Autocomplete<ILocation, false, false, true>

      id='search'

      freeSolo

      options={options}

      filterOptions={x => x}

      onInputChange={(event, value) => handleInput(value)}

      onChange={(e, value) => handleChange(value as ILocation | null)}

      getOptionLabel={(option) => (option as ILocation).name || ''}

      isOptionEqualToValue={(option, value) => option.id === value.id}

      renderInput={(params) => <TextField
        {...params}
        placeholder={
          appStore.locationStore.location === null
          ? 'Location'
          : formatLocation(appStore.locationStore.location)
        }
        InputLabelProps={{ shrink: true }}
      />}
      
      renderOption={(props, option) => <li {...props} key={option.id}>
        <Stack>
          <Typography>{option.name}</Typography>
          <Typography color={grey[500]}>
            {formatLocation(option)}
          </Typography>
        </Stack>
      </li>}
      
    />
  );
})

export { Search }