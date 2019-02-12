import React from 'react';
import Name from './Name';

function Header(){
  const headerStyle = {
    backgroundColor: 'gray',
    width: '100%',
    padding: '30'
  };

  return (
    <div style={headerStyle}>
      <Name/>
    </div>
  );
}

export default Header;
