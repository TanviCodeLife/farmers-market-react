import React from 'react';
import ProduceHeadline from './ProduceHeadline';
import MonthDropdown from './MonthDropdown';
import ProduceSearch from './ProduceSearch';
import MonthList from './MonthList';

function ProduceSection(){
  const monthScheduleStyle = {
    backgroundColor: 'pink'
  };

  return (
    <div style={monthScheduleStyle}>
      <ProduceHeadline/>
      <MonthDropdown/>
      <ProduceSearch/>
      <MonthList/>
    </div>
  );
}

export default ProduceSection;
