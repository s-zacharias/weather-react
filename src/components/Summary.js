import React from 'react';

const Summary = ({ i, location, units, handleTemperature, onDelete }) => {
  if (location === undefined) {
    return <div>Not a valid location!</div>;
  }

  return (
    <div className="summary">
      <button onClick={() => onDelete(i)}>x</button>
      <h4>{location.name}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${location.icon}@2x.png`}
        alt="weather-icon"
      />
      <p>currently: {handleTemperature(units, location.current)}</p>
      <p>
        {`H : ${handleTemperature(
          units,
          location.high
        )} | L: ${handleTemperature(units, location.low)}`}
      </p>
    </div>
  );
};

export default Summary;
