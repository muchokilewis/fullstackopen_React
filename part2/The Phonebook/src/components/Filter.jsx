import React from 'react';

const Filter = ({ searchName, setSearchName }) => {
  return (
    <div>
      Filter by name: <input value={searchName} onChange={setSearchName} />
    </div>
  );
}

export default Filter;