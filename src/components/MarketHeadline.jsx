import React from 'react';

function MarketHeadline(){
  const headlineStyle = {
    fontWeight: 'lighter',
    fontSize: '35',
    color: 'gray'
  };

  return (
    <h2 style={headlineStyle}>Market Schedule</h2>
  );
}

export default MarketHeadline;
