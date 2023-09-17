import { useContext } from 'react';

import { WeatherApi } from '../api/WeatherApi';

import { WeatherApiContext } from '../context/WeatherApiContext';

import { ContextValueNotProvidedError } from '../errors/ContextValueNotProvidedError';

const useWeatherApi = () : WeatherApi => {
  const weatherApiContext = useContext(WeatherApiContext);

  if (weatherApiContext === null) {
    throw new ContextValueNotProvidedError();
  }

  return weatherApiContext;
}

export { useWeatherApi }