import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Navbar, NavItem, Icon} from 'react-materialize';

function Header(){
  const navbarStyle = {
    backgroundColor: '#ffc04c'
  };
  return (
    <div>
      <Navbar icon='spa' brand='My Organics' left style={navbarStyle}>
        <NavItem href='get-started.html'>Market</NavItem>
        <NavItem href='components.html'>Produce</NavItem>
        <NavItem><Icon>spa</Icon></NavItem>
      </Navbar>
    </div>
  );
}

export default Header;
