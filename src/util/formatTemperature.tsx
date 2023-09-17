export function formatTemperature(temp : number) {
  return `${temp >= 0 ? '+' : '-'}${temp}°`;
}