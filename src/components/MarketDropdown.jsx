import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Dropdown, Button, NavItem} from 'react-materialize';

function MarketDropdown(){
  const dropdownStyle = {
    marginTop: '15',
    height: '50'
  };

  return (
    <Dropdown trigger={
      <Button style={dropdownStyle}>Select Market</Button>
    } >
      <NavItem>Lents International</NavItem>
      <NavItem>Pioneer Courthouse Square</NavItem>
      <NavItem>Hillsboro</NavItem>
      <NavItem>Shemanski Park</NavItem>
      <NavItem>Northwest Portland</NavItem>
      <NavItem>Beaverton</NavItem>

    </Dropdown>
  );
}

export default MarketDropdown;
