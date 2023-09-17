import { createContext } from 'react';

import { WeatherApi } from '../api/WeatherApi';

const WeatherApiContext = createContext<WeatherApi | null>(null);

export { WeatherApiContext }