import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Dropdown, Button, NavItem} from 'react-materialize';

function MonthDropdown(){
  const dropdownStyle = {
    marginTop: '15',
    height: '50'
  };
  return (
    <Dropdown trigger={
      <Button style={dropdownStyle}>Select Month</Button>
    } >
      <NavItem>January</NavItem>
      <NavItem divider />
      <NavItem>February</NavItem>
      <NavItem divider />
      <NavItem>March</NavItem>
      <NavItem divider />
      <NavItem>April</NavItem>
      <NavItem divider />
      <NavItem>May</NavItem>
      <NavItem divider />
      <NavItem>June</NavItem>
      <NavItem divider />
      <NavItem>July</NavItem>
      <NavItem divider />
      <NavItem>August</NavItem>
      <NavItem divider />
      <NavItem>September</NavItem>
      <NavItem divider />
      <NavItem>October</NavItem>
      <NavItem divider />
      <NavItem>November</NavItem>
      <NavItem divider />
      <NavItem>December</NavItem>
    </Dropdown>
  );
}

export default MonthDropdown;

<Dropdown trigger={
    <Button>Drop me!</Button>
}>
    <NavItem>one</NavItem>
    <NavItem>two</NavItem>
    <NavItem divider />
    <NavItem>three</NavItem>
  </Dropdown>;
