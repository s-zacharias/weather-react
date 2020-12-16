import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import SavedLocations from './SavedLocations';
import useWeatherData from '../hooks/useWeatherData';
import './styles.css';

const App = () => {
  const [currentWeather, fetchCurrentWeather] = useWeatherData('Vista');
  const [units, setUnits] = useState('f');
  const [savedLocations, setSavedLocations] = useState([]);

  const onDelete = (key) => {
    const newSavedLocations = [];
    for (let i = 0; i < savedLocations.length; i++) {
      if (i !== key) {
        newSavedLocations.push(savedLocations[i]);
      }
    }
    setSavedLocations(newSavedLocations);
  };

  const onUnitChange = () => {
    if (units === 'f') {
      setUnits('c');
    } else if (units === 'c') {
      setUnits('f');
    }
  };

  const handleTemperature = (unit, temperature) => {
    if (unit === 'f') {
      return `${Math.floor((temperature - 273.15) * (9 / 5) + 32)} °F`;
    }
    return `${Math.floor(temperature - 273.15)} °C`;
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>weather app</h1>
        <SearchBar onFormSubmit={fetchCurrentWeather} />
        <button onClick={() => onUnitChange()}>
          {units === 'f' ? '°F' : '°C'}
        </button>
      </div>
      <div className="weather-info">
        <CurrentWeather
          currentWeather={currentWeather}
          units={units}
          handleTemperature={handleTemperature}
          savedLocations={savedLocations}
          setSavedLocations={setSavedLocations}
        />
        <SavedLocations
          savedLocations={savedLocations}
          setSavedLocations={setSavedLocations}
          units={units}
          handleTemperature={handleTemperature}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default App;
