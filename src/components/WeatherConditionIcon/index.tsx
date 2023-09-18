/* eslint-disable no-fallthrough */
import React from 'react';

import classNames from 'classnames';

import { useTheme } from '@mui/material/styles';

import { ReactComponent as WiCloudy } from '../../assets/svg/wi-cloudy.svg';
import { ReactComponent as WiFog } from '../../assets/svg/wi-fog.svg';
import { ReactComponent as WiShowers } from '../../assets/svg/wi-showers.svg';
import { ReactComponent as WiSnow } from '../../assets/svg/wi-snow.svg';
import { ReactComponent as WiSnowWind } from '../../assets/svg/wi-snow-wind.svg';
import { ReactComponent as WiSleet } from '../../assets/svg/wi-sleet.svg';
import { ReactComponent as WiThunderstorm } from '../../assets/svg/wi-thunderstorm.svg';
import { ReactComponent as WiRain } from '../../assets/svg/wi-rain.svg';
import { ReactComponent as WiHail } from '../../assets/svg/wi-hail.svg';
import { ReactComponent as WiLightning } from '../../assets/svg/wi-lightning.svg';

import { ReactComponent as WiDaySunny } from '../../assets/svg/wi-day-sunny.svg';
import { ReactComponent as WiDayCloudy } from '../../assets/svg/wi-day-cloudy.svg';
import { ReactComponent as WiDayFog } from '../../assets/svg/wi-day-fog.svg';
import { ReactComponent as WiDayShowers } from '../../assets/svg/wi-day-showers.svg';
import { ReactComponent as WiDaySnow } from '../../assets/svg/wi-day-snow.svg';
import { ReactComponent as WiDaySnowWind } from '../../assets/svg/wi-day-snow-wind.svg';
import { ReactComponent as WiDaySleet } from '../../assets/svg/wi-day-sleet.svg';
import { ReactComponent as WiDayThunderstorm } from '../../assets/svg/wi-day-thunderstorm.svg';
import { ReactComponent as WiDayRain } from '../../assets/svg/wi-day-rain.svg';
import { ReactComponent as WiDayHail } from '../../assets/svg/wi-day-hail.svg';
import { ReactComponent as WiDaySnowThunderstorm } from '../../assets/svg/wi-day-snow-thunderstorm.svg';

import { ReactComponent as WiNightClear } from '../../assets/svg/wi-night-clear.svg';
import { ReactComponent as WiNightAltCloudy } from '../../assets/svg/wi-night-alt-cloudy.svg';
import { ReactComponent as WiNightFog } from '../../assets/svg/wi-night-fog.svg';
import { ReactComponent as WiNightShowers } from '../../assets/svg/wi-night-showers.svg';
import { ReactComponent as WiNightSnow } from '../../assets/svg/wi-night-snow.svg';
import { ReactComponent as WiNightSnowWind } from '../../assets/svg/wi-night-snow-wind.svg';
import { ReactComponent as WiNightSleet } from '../../assets/svg/wi-night-sleet.svg';
import { ReactComponent as WiNightThunderstorm } from '../../assets/svg/wi-night-thunderstorm.svg';
import { ReactComponent as WiNightRain } from '../../assets/svg/wi-night-rain.svg';
import { ReactComponent as WiNightHail } from '../../assets/svg/wi-night-hail.svg';
import { ReactComponent as WiNightSnowThunderstorm } from '../../assets/svg/wi-night-snow-thunderstorm.svg';

import styles from './index.module.css';

interface WeatherConditionIconProps {
  conditionCode : number,
  isDay : boolean,
  variant : 'big' | 'small',
}

interface IconDispatcherProps extends React.SVGProps<SVGSVGElement> {
  conditionCode : number,
  isDay : boolean,
}

const IconDispatcher : React.FC<IconDispatcherProps> = ({ conditionCode, isDay, ...props }) => {
  switch (conditionCode) {
    // 1000 - Sunny / Clear
    case 1000: return isDay ? <WiDaySunny {...props} /> : <WiNightClear {...props} />;
    // 1003 - Partly Cloudy / Partly Cloudy
    case 1003:
    // 1006 - Cloudy / Cloudy
    case 1006: return isDay ? <WiDayCloudy {...props} /> : <WiNightAltCloudy {...props} />;
    // 1009 - Overcast / Overcast
    case 1009: return <WiCloudy {...props} />;
    // 1030 - Mist / Mist
    case 1030: return <WiFog {...props} />; 
    // 1063 - Patchy rain nearby / Patchy rain nearby 
    case 1063: return <WiShowers {...props} />;
    // 1066 - Patchy snow nearby / Patchy snow nearby
    case 1066: return <WiSnow {...props} />;
    // 1069 - Patchy sleet nearby / Patchy sleet nearby
    case 1069: return <WiSleet {...props} />;
    // 1072 - Patchy freezing drizzle nearby / Patchy freezing drizzle nearby
    case 1072: return <WiSleet {...props} />;
    // 1087 - Thundery outbreaks in nearby / Thundery outbreaks in nearby
    case 1087: return <WiThunderstorm {...props} />;
    // 1114 - Blowing snow / Blowing snow == 
    case 1114: return <WiSnowWind {...props} />;
    // 1117 - Blizzard / Blizzard == 
    case 1117: return <WiSnowWind {...props} />;
    // 1135 - Fog / Fog
    case 1135: return <WiFog {...props} />; 
    // 1147 - Freezing fog / Freezing fog
    case 1147: return <WiFog {...props} />; 
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
    case 1201: return <WiRain {...props} />;
    // 1204 - Light sleet / Light sleet
    case 1204: return <WiSleet {...props} />;
    // 1207 - Moderate or heavy sleet / Moderate or heavy sleet
    case 1207: return <WiSleet {...props} />;
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
    case 1225: return <WiSnow {...props} />;
    // 1237 - Ice pellets / Ice pellets
    case 1237: return <WiHail {...props} />;
    // 1240 - Light rain shower / Light rain shower
    case 1240: 
    // 1243 - Moderate or heavy rain shower / Moderate or heavy rain shower --
    case 1243:
    // 1246 - Torrential rain shower / Torrential rain shower
    case 1246: return <WiShowers{...props} />;
    // 1249 - Light sleet showers / Light sleet showers
    case 1249:
    // 1252 - Moderate or heavy sleet showers / Moderate or heavy sleet showers
    case 1252: return <WiSleet {...props} />;
    // 1255 - Light snow showers / Light snow showers
    case 1255:
    // 1258 - Moderate or heavy snow showers / Moderate or heavy snow showers
    case 1258: return <WiSnow {...props} />;
    // 1261 - Light showers of ice pellets / Light showers of ice pellets == 
    case 1261:
    // 1264 - Moderate or heavy showers of ice pellets / Moderate or heavy showers of ice pellets
    case 1264: return <WiHail {...props} />;
    // 1273 - Patchy light rain in area with thunder / Patchy light rain in area with thunder
    case 1273:
    // 1276 - Moderate or heavy rain in area with thunder / Moderate or heavy rain in area with thunder
    case 1276: return <WiThunderstorm {...props} />;
    // 1279 - Patchy light snow in area with thunder / Patchy light snow in area with thunder
    case 1279:
    // 1282 - Moderate or heavy snow in area with thunder / Moderate or heavy snow in area with thunder
    case 1282: return <WiDaySnowThunderstorm {...props} />;
    default: return <WiDaySunny {...props} />
  }
}

const WeatherConditionIcon : React.FC<WeatherConditionIconProps> = ({ conditionCode, isDay, variant }) => {
  const theme = useTheme();
  
  return (
    <IconDispatcher
      conditionCode={conditionCode}
      isDay={isDay}
      className={classNames(styles.weatherConditionIcon, {
        [styles.weatherConditionIconSmall] : variant === 'small',
        [styles.weatherConditionIconBig] : variant === 'big',
      })}
      fill={theme.palette.primary.main}
    />
  );
}

export { WeatherConditionIcon }