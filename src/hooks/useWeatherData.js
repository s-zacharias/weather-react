import { useState, useEffect } from 'react';
import openweather from '../apis/openweather';

const useWeatherData = (defaultLocation) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(defaultLocation);
  }, [defaultLocation]);

  const fetchWeatherData = async (location) => {
    const response = await openweather.get('/weather', {
      params: {
        q: location,
      },
    });

    setWeatherData({
      name: response.data.name,
      icon: response.data.weather[0].icon,
      main: response.data.weather[0].main,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      humidity: response.data.main.humidity,
    });
  };

  return [weatherData, fetchWeatherData];
};

export default useWeatherData;
