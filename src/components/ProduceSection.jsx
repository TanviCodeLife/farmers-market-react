import React from 'react';
import ProduceHeadline from './ProduceHeadline';
import MonthDropdown from './MonthDropdown';
import ProduceSearch from './ProduceSearch';
import MonthList from './MonthList';

function ProduceSection(){
  const monthScheduleStyle = {
    backgroundColor: 'white',
    padding: '25',
    paddingLeft: '50',
    paddingRight: '50'
  };

  const searchStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr'
  };

  return (
    <div style={monthScheduleStyle}>
      <ProduceHeadline/>
      <div style={searchStyle}>
        <MonthDropdown/>
        <ProduceSearch/>
      </div>
      <MonthList/>
    </div>
  );
}

export default ProduceSection;
