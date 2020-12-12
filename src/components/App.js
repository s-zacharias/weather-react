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

  // function success(pos) {
  //   var crd = pos.coords;

  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   return crd;
  // }

  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(success, error);
  // }
  console.log('savedLocations:', savedLocations);
  const onUnitChange = () => {
    if (units === 'f') {
      setUnits('c');
    } else if (units === 'c') {
      setUnits('f');
    }
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
          savedLocations={savedLocations}
          setSavedLocations={setSavedLocations}
        />
        <SavedLocations savedLocations={savedLocations} units={units} />
      </div>
    </div>
  );
};

export default App;
