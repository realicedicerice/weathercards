export interface IForecastDay {
  date : string,

  date_epoch : number,
  
  day: {
    maxtemp_c : number,

    maxtemp_f : number,

    mintemp_c : number,

    mintemp_f : number,

    avgtemp_c : number,

    avgtemp_f : number,

    maxwind_mph : number,

    maxwind_kph : number,

    totalprecip_mm : number,

    totalprecip_in : number,

    avgvis_km : number,

    avgvis_miles : number,

    avghumidity : number,

    daily_will_it_rain : 0 | 1,

    daily_chance_of_rain : number,

    daily_will_it_snow : 0 | 1,

    daily_chance_of_snow : number,

    condition : {
      text : string,

      icon : string,

      code : number,
    },
  },

  hour : Array<{
    time_epoch : number,

    time : string,

    temp_c : number,

    temp_f : number,

    is_day : 0 | 1,

    condition : {
      text : string,

      icon : string,

      code : number,
    },

    wind_mph : number,

    wind_kph : number,

    wind_degree : number,

    wind_dir : number,

    pressure_mb : number,

    pressure_in : number,

    precip_mm : number,

    precip_in : number,

    humidity : number,

    cloud : number,

    feelslike_c : number,

    feelslike_f : number,

    windchill_c : number,

    windchill_f : number,

    heatindex_c : number,

    heatindex_f : number,

    dewpoint_c : number,

    dewpoint_f : number,

    will_it_rain : 0 | 1,

    chance_of_rain : number,

    will_it_snow : 0 | 1,

    chance_of_snow : number,

    vis_km : number,

    vis_miles : number,

    gust_mph : number,

    gust_kph : number,

    uv : number,
  }>,
}