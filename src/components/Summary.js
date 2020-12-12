import React from 'react';

const Summary = ({ location, units }) => {
  const handleTemperature = (temperature) => {
    if (units === 'f') {
      return `${Math.floor((temperature - 273.15) * (9 / 5) + 32)} °F`;
    }
    return `${Math.floor(temperature - 273.15)} °C`;
  };
  if (location === undefined) {
    return <div>bye</div>;
  }
  console.log('location', location);
  return (
    <div className="summary">
      <h4>{location.name}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${location.icon}@2x.png`}
        alt="weather-icon"
      />
      <p>currently: {handleTemperature(location.current)}</p>
      <p>
        {`H : ${handleTemperature(location.high)} | L: ${handleTemperature(
          location.low
        )}`}
      </p>
    </div>
  );
};

export default Summary;
