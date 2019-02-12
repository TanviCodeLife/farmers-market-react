import React from 'react';
import MarketHeadline from './MarketHeadline';
import MarketDropdown from './MarketDropdown';
import MarketScheduleList from './MarketScheduleList';

function MarketSchedule(){
  const marketScheduleStyle = {
    backgroundColor: 'blue'
  };

  return (
    <div style={marketScheduleStyle}>
      <MarketHeadline/>
      <MarketDropdown/>
      <MarketScheduleList/>
    </div>
  );
}

export default MarketSchedule;
