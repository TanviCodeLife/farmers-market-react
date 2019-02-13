import React from 'react';
import MarketHeadline from './MarketHeadline';
import MarketDropdown from './MarketDropdown';
import MarketScheduleList from './MarketScheduleList';

function MarketSchedule(){
  const marketScheduleStyle = {
    backgroundColor: '#ffedcc',
    padding: '25'
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
