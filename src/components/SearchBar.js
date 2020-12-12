import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [city, setCity] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(city);
    setCity('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Enter a City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
