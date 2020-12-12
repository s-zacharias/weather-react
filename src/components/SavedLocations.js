import React from 'react';
import Summary from './Summary';

const SavedLocations = ({ savedLocations, units }) => {
  if (savedLocations.length === 0) {
    return <div>Save some locations!</div>;
  } else {
    const renderList = savedLocations.map((el, index) => {
      return <Summary key={index} location={el} units={units} />;
    });
    return <div className="saved-locations">{renderList}</div>;
  }
};

export default SavedLocations;
