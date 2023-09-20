/* eslint-disable no-fallthrough */
import React from 'react';

import classNames from 'classnames';

import { useTheme } from '@mui/material/styles';

import WiCloudy from '../../assets/svg/wi-cloudy.svg?react';
import WiFog from '../../assets/svg/wi-fog.svg?react';
import WiShowers from '../../assets/svg/wi-showers.svg?react';
import WiSnow from '../../assets/svg/wi-snow.svg?react';
import WiSnowWind from '../../assets/svg/wi-snow-wind.svg?react';
import WiSleet from '../../assets/svg/wi-sleet.svg?react';
import WiThunderstorm from '../../assets/svg/wi-thunderstorm.svg?react';
import WiRain from '../../assets/svg/wi-rain.svg?react';
import WiHail from '../../assets/svg/wi-hail.svg?react';
// import WiLightning from '../../assets/svg/wi-lightning.svg?react';

import WiDaySunny from '../../assets/svg/wi-day-sunny.svg?react';
import WiDayCloudy from '../../assets/svg/wi-day-cloudy.svg?react';
import WiDayFog from '../../assets/svg/wi-day-fog.svg?react';
import WiDayShowers from '../../assets/svg/wi-day-showers.svg?react';
import WiDaySnow from '../../assets/svg/wi-day-snow.svg?react';
import WiDaySnowWind from '../../assets/svg/wi-day-snow-wind.svg?react';
import WiDaySleet from '../../assets/svg/wi-day-sleet.svg?react';
import WiDayThunderstorm from '../../assets/svg/wi-day-thunderstorm.svg?react';
import WiDayRain from '../../assets/svg/wi-day-rain.svg?react';
import WiDayHail from '../../assets/svg/wi-day-hail.svg?react';
import WiDaySnowThunderstorm from '../../assets/svg/wi-day-snow-thunderstorm.svg?react';

import WiNightClear from '../../assets/svg/wi-night-clear.svg?react';
import WiNightAltCloudy from '../../assets/svg/wi-night-alt-cloudy.svg?react';
import WiNightFog from '../../assets/svg/wi-night-fog.svg?react';
import WiNightShowers from '../../assets/svg/wi-night-showers.svg?react';
import WiNightSnow from '../../assets/svg/wi-night-snow.svg?react';
import WiNightSnowWind from '../../assets/svg/wi-night-snow-wind.svg?react';
import WiNightSleet from '../../assets/svg/wi-night-sleet.svg?react';
import WiNightThunderstorm from '../../assets/svg/wi-night-thunderstorm.svg?react';
import WiNightRain from '../../assets/svg/wi-night-rain.svg?react';
import WiNightHail from '../../assets/svg/wi-night-hail.svg?react';
import WiNightSnowThunderstorm from '../../assets/svg/wi-night-snow-thunderstorm.svg?react';

import styles from './index.module.css';

interface WeatherConditionIconProps {
  conditionCode : number,
  variant : 'day' | 'night' | 'universal',
  size : 'big' | 'small',
}

interface IconDispatcherProps extends React.SVGProps<SVGSVGElement> {
  conditionCode : number,
  variant : 'day' | 'night' | 'universal',
}

const IconDispatcher : React.FC<IconDispatcherProps> = ({ conditionCode, variant, ...props }) => {
  function ByVariant (
    Day : React.FC<React.SVGProps<SVGSVGElement>>,
    Night : React.FC<React.SVGProps<SVGSVGElement>>,
    Universal : React.FC<React.SVGProps<SVGSVGElement>>,
  ) {
    if (variant === 'day') return <Day {...props} />;
    if (variant === 'night') return <Night {...props} />;
    return <Universal {...props} />;
  }

  switch (conditionCode) {
    // 1000 - Sunny / Clear
    case 1000: return ByVariant(WiDaySunny, WiNightClear, WiCloudy);
    // 1003 - Partly Cloudy / Partly Cloudy
    case 1003:
    // 1006 - Cloudy / Cloudy
    case 1006: return ByVariant(WiDayCloudy, WiNightAltCloudy, WiCloudy);
    // 1009 - Overcast / Overcast
    case 1009: return ByVariant(WiCloudy, WiCloudy, WiCloudy);
    // 1030 - Mist / Mist
    case 1030: return ByVariant(WiDayFog, WiNightFog, WiFog); 
    // 1063 - Patchy rain nearby / Patchy rain nearby 
    case 1063: return ByVariant(WiDayShowers, WiNightShowers, WiShowers);
    // 1066 - Patchy snow nearby / Patchy snow nearby
    case 1066: return ByVariant(WiDaySnow, WiNightSnow, WiSnow);
    // 1069 - Patchy sleet nearby / Patchy sleet nearby
    case 1069: 
    // 1072 - Patchy freezing drizzle nearby / Patchy freezing drizzle nearby
    case 1072: return ByVariant(WiDaySleet, WiNightSleet, WiSleet);
    // 1087 - Thundery outbreaks in nearby / Thundery outbreaks in nearby
    case 1087: return ByVariant(WiDayThunderstorm, WiNightThunderstorm, WiThunderstorm);
    // 1114 - Blowing snow / Blowing snow == 
    case 1114:
    // 1117 - Blizzard / Blizzard == 
    case 1117: return ByVariant(WiDaySnowWind, WiNightSnowWind, WiSnowWind);
    // 1135 - Fog / Fog
    case 1135:
    // 1147 - Freezing fog / Freezing fog
    case 1147: return ByVariant(WiDayFog, WiNightFog, WiFog); 
    // 1150 - Patchy light drizzle / Patchy light drizzle
    case 1150:
    // 1153 - Light drizzle / Light drizzle
    case 1153:
    // 1168 - Freezing drizzle / Freezing drizzle
    case 1168:
    // 1171 - Heavy freezing drizzle / Heavy freezing drizzle
    case 1171:
    // 1180 - Patchy light rain / Patchy light rain
    case 1180: 
    // 1183 - Light rain / Light rain
    case 1183: 
    // 1186 - Moderate rain at times / Moderate rain at times
    case 1186: 
    // 1189 - Moderate rain / Moderate rain
    case 1189: 
    // 1192 - Heavy rain at times / Heavy rain at times
    case 1192: 
    // 1195 - Heavy rain / Heavy rain
    case 1195: 
    // 1198 - Light freezing rain / Light freezing rain
    case 1198: 
    // 1201 - Moderate or heavy freezing rain / Moderate or heavy freezing rain
    case 1201: return ByVariant(WiDayRain, WiNightRain, WiRain);
    // 1204 - Light sleet / Light sleet
    case 1204:
    // 1207 - Moderate or heavy sleet / Moderate or heavy sleet
    case 1207: return ByVariant(WiDaySleet, WiNightSleet, WiSleet);
    // 1210 - Patchy light snow / Patchy light snow
    case 1210:
    // 1213 - Light snow / Light snow
    case 1213:
    // 1216 - Patchy moderate snow / Patchy moderate snow
    case 1216:
    // 1219 - Moderate snow / Moderate snow
    case 1219:
    // 1222 - Patchy heavy snow / Patchy heavy snow
    case 1222:
    // 1225 - Heavy snow / Heavy snow
    case 1225: return ByVariant(WiDaySnow, WiNightSnow, WiSnow);
    // 1237 - Ice pellets / Ice pellets
    case 1237: return ByVariant(WiDayHail, WiNightHail, WiHail);
    // 1240 - Light rain shower / Light rain shower
    case 1240: 
    // 1243 - Moderate or heavy rain shower / Moderate or heavy rain shower --
    case 1243:
    // 1246 - Torrential rain shower / Torrential rain shower
    case 1246: return ByVariant(WiDayShowers, WiNightShowers, WiShowers);
    // 1249 - Light sleet showers / Light sleet showers
    case 1249:
    // 1252 - Moderate or heavy sleet showers / Moderate or heavy sleet showers
    case 1252: return ByVariant(WiDaySleet, WiNightSleet, WiSleet);
    // 1255 - Light snow showers / Light snow showers
    case 1255:
    // 1258 - Moderate or heavy snow showers / Moderate or heavy snow showers
    case 1258: return ByVariant(WiDaySnow, WiNightSnow, WiSnow);
    // 1261 - Light showers of ice pellets / Light showers of ice pellets == 
    case 1261:
    // 1264 - Moderate or heavy showers of ice pellets / Moderate or heavy showers of ice pellets
    case 1264: return ByVariant(WiDayHail, WiNightHail, WiHail);
    // 1273 - Patchy light rain in area with thunder / Patchy light rain in area with thunder
    case 1273:
    // 1276 - Moderate or heavy rain in area with thunder / Moderate or heavy rain in area with thunder
    case 1276: return ByVariant(WiDayThunderstorm, WiNightThunderstorm, WiThunderstorm);
    // 1279 - Patchy light snow in area with thunder / Patchy light snow in area with thunder
    case 1279:
    // 1282 - Moderate or heavy snow in area with thunder / Moderate or heavy snow in area with thunder
    case 1282: return ByVariant(WiDaySnowThunderstorm, WiNightSnowThunderstorm, WiThunderstorm);
    default: return ByVariant(WiCloudy, WiCloudy, WiCloudy);
  }
}

const WeatherConditionIcon : React.FC<WeatherConditionIconProps> = ({ conditionCode, variant, size }) => {
  const theme = useTheme();
  
  return (
    <IconDispatcher
      conditionCode={conditionCode}
      variant={variant}
      className={classNames(styles.weatherConditionIcon, {
        [styles.weatherConditionIconSmall] : size === 'small',
        [styles.weatherConditionIconBig] : size === 'big',
      })}
      fill={theme.palette.primary.main}
    />
  );
}

export { WeatherConditionIcon }