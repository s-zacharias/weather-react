import React from 'react';
import Summary from './Summary';

const SavedLocations = ({
  savedLocations,
  onDelete,
  units,
  handleTemperature,
}) => {
  if (savedLocations.length === 0) {
    return <div>Save some locations!</div>;
  } else {
    const renderList = savedLocations.map((el, index) => {
      return (
        <Summary
          key={index}
          i={index}
          location={el}
          units={units}
          onDelete={onDelete}
          handleTemperature={handleTemperature}
        />
      );
    });
    return <div className="saved-locations">{renderList}</div>;
  }
};

export default SavedLocations;
