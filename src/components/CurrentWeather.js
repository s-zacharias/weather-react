import React from 'react';

const CurrentWeather = ({
  currentWeather,
  units,
  savedLocations,
  setSavedLocations,
}) => {
  const handleTemperature = (temperature) => {
    if (units === 'f') {
      return `${Math.floor((temperature - 273.15) * (9 / 5) + 32)} °F`;
    }
    return `${Math.floor(temperature - 273.15)} °C`;
  };
  let locationSummary = {};
  if (currentWeather) {
    locationSummary = {
      name: currentWeather.name,
      icon: currentWeather.icon,
      current: currentWeather.temp,
      high: currentWeather.tempMax,
      low: currentWeather.tempMin,
    };
  }

  console.log('currentWeather:', currentWeather);

  if (!currentWeather) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="current-weather">
        <div className="weather-display">
          <h1>{currentWeather.name}</h1>
          <span>{currentWeather.description}!</span>
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
            alt="weather-icon"
          />
          <span>
            It's {currentWeather.main} and feels like{' '}
            {handleTemperature(currentWeather.feelsLike)}
          </span>
        </div>

        <div className="stats">
          <span>Actual: {handleTemperature(currentWeather.temp)}</span>
          <span>High: {handleTemperature(currentWeather.tempMax)}</span>
          <span>Low: {handleTemperature(currentWeather.tempMin)}</span>
          <span>Humidity: {currentWeather.humidity}%</span>
        </div>

        <div>
          <button
            onClick={() =>
              setSavedLocations([...savedLocations, locationSummary])
            }
          >
            Save this location?
          </button>
        </div>
      </div>
    );
  }
};

export default CurrentWeather;
