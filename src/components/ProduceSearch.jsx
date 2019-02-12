import React from 'react';

function ProduceSearch(){
  const searchBoxStyles = {
    borderRadius: '10',
    padding: '5'
  };
  return (
    <div>
      <label for="search">Search</label>
      <input value="Search"/>
    </div>
  );
}

export default ProduceSearch;
