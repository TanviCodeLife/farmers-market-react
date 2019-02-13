import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Input, Icon} from 'react-materialize';

function ProduceSearch(){
  const searchBoxStyles = {
    boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, .2)',
    backgroundColor: 'white',
    width: '50%'
  };
  return (
    <Input s={6} label="Search Produce" validate style={searchBoxStyles}><Icon>search</Icon></Input>
  );
}

export default ProduceSearch;
