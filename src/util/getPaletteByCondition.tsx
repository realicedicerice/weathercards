import { IPalette } from '../interfaces/IPalette';

export function getPaletteByCondition(conditionCode : number, isDay : boolean) : IPalette {
  const conditionGroup = Math.floor(conditionCode % 1000 / 10);
  
  switch (conditionGroup) {
    // 1000 - Sunny / Clear
    // 1003 - Partly Cloudy / Partly Cloudy
    // 1006 - Cloudy / Cloudy
    // 1009 - Overcast / Overcast
    case 0: return isDay ? {
      gradient1: '#3F51B5',
      gradient2: '#E3F2FD',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '#311B92',
      gradient2: '#000000',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1030 - Mist / Mist
    case 3: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1063 - Patchy rain nearby / Patchy rain nearby 
    // 1066 - Patchy snow nearby / Patchy snow nearby
    // 1069 - Patchy sleet nearby / Patchy sleet nearby
    case 6: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1072 - Patchy freezing drizzle nearby / Patchy freezing drizzle nearby
    case 7: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1087 - Thundery outbreaks in nearby / Thundery outbreaks in nearby
    case 8: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1114 - Blowing snow / Blowing snow == 
    // 1117 - Blizzard / Blizzard == 
    case 11: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1135 - Fog / Fog
    case 13: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1147 - Freezing fog / Freezing fog
    case 14: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1150 - Patchy light drizzle / Patchy light drizzle
    // 1153 - Light drizzle / Light drizzle
    case 15: return isDay ? {
      gradient1: '',
      gradient2: '',
      mode: 'light',
      primary: '#000000',
      textColor: '#000000',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1168 - Freezing drizzle / Freezing drizzle
    case 16: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1171 - Heavy freezing drizzle / Heavy freezing drizzle
    case 17: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1180 - Patchy light rain / Patchy light rain
    // 1183 - Light rain / Light rain
    // 1186 - Moderate rain at times / Moderate rain at times
    // 1189 - Moderate rain / Moderate rain
    case 18: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1192 - Heavy rain at times / Heavy rain at times
    // 1195 - Heavy rain / Heavy rain
    // 1198 - Light freezing rain / Light freezing rain
    case 19: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1201 - Moderate or heavy freezing rain / Moderate or heavy freezing rain
    // 1204 - Light sleet / Light sleet
    // 1207 - Moderate or heavy sleet / Moderate or heavy sleet
    case 20: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1210 - Patchy light snow / Patchy light snow
    // 1213 - Light snow / Light snow
    // 1216 - Patchy moderate snow / Patchy moderate snow
    // 1219 - Moderate snow / Moderate snow
    case 21: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1222 - Patchy heavy snow / Patchy heavy snow
    // 1225 - Heavy snow / Heavy snow
    case 22: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1237 - Ice pellets / Ice pellets
    case 23: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1240 - Light rain shower / Light rain shower
    // 1243 - Moderate or heavy rain shower / Moderate or heavy rain shower --
    // 1246 - Torrential rain shower / Torrential rain shower
    // 1249 - Light sleet showers / Light sleet showers
    case 24: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1252 - Moderate or heavy sleet showers / Moderate or heavy sleet showers
    // 1255 - Light snow showers / Light snow showers
    // 1258 - Moderate or heavy snow showers / Moderate or heavy snow showers
    case 25: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1261 - Light showers of ice pellets / Light showers of ice pellets == 
    // 1264 - Moderate or heavy showers of ice pellets / Moderate or heavy showers of ice pellets
    case 26: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1273 - Patchy light rain in area with thunder / Patchy light rain in area with thunder
    // 1276 - Moderate or heavy rain in area with thunder / Moderate or heavy rain in area with thunder
    // 1279 - Patchy light snow in area with thunder / Patchy light snow in area with thunder
    case 27: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    // 1282 - Moderate or heavy snow in area with thunder / Moderate or heavy snow in area with thunder
    case 28: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };

    default: return isDay ? {
      gradient1: '',
      gradient2: '',
      textColor: '#000000',
      primary: '#000000',
      mode: 'light',
    } : {
      gradient1: '',
      gradient2: '',
      textColor: '#FFFFFF',
      primary: '#FFFFFF',
      mode: 'dark',
    };
  }
}