import { HTTPError } from '../errors/HTTPError';
import { NetworkError } from '../errors/NetworkError';

import { ICurrent } from '../interfaces/ICurrent';
import { IForecastDay } from '../interfaces/IForecastDay';
import { ILocation } from '../interfaces/ILocation';

const BASE_URL = 'https://api.weatherapi.com/v1/';

class WeatherApi {
  constructor(private apiKey : string) {}

  async requestWrapper<T>(url : string, searchParams : any) {
    try {
      const response = await fetch(
        new URL(`${url}?${new URLSearchParams({
          ...searchParams,
          key: this.apiKey,
        })}`, BASE_URL),
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new HTTPError(response);
      }

      return await response.json() as T;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new NetworkError();
      }

      throw error;
    }
  }

  async search(q : string) : Promise<Array<ILocation>> {
    return await this.requestWrapper<Array<ILocation>>('search.json', { q });
  }

  async current(q : string) : Promise<{ current : ICurrent, location : ILocation }> {
    return await this.requestWrapper<{ current : ICurrent, location : ILocation }>('current.json', { q });
  }

  async forecast(q : string, days : number) : Promise<Array<IForecastDay>> {
    return (
      await this.requestWrapper<{ forecast : { forecastday: Array<IForecastDay> } }>('forecast.json', { q, days })
    ).forecast.forecastday;
  }
}

export { WeatherApi }