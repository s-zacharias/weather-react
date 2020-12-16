import React from 'react';

const CurrentWeather = ({
  currentWeather,
  units,
  handleTemperature,
  savedLocations,
  setSavedLocations,
}) => {
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
            {currentWeather.main} and feels like{' '}
            {handleTemperature(units, currentWeather.feelsLike)}
          </span>
        </div>

        <div className="stats">
          <span>Actual: {handleTemperature(units, currentWeather.temp)}</span>
          <span>High: {handleTemperature(units, currentWeather.tempMax)}</span>
          <span>Low: {handleTemperature(units, currentWeather.tempMin)}</span>
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
