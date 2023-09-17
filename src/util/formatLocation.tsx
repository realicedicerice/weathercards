import { ILocation } from '../interfaces/ILocation';

export function formatLocation({ name, region, country } : ILocation) {
  return `${name ? name + ', ' : ''}${region ? region + ', ' : ''}${country ? country : ''}`;
}