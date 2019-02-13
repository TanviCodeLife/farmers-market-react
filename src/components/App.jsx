import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import ProduceSection from './ProduceSection';

function App(){
  const sidebarStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 5fr'
  };

  return (
    <div>
      <style jsx>{`
    body {
      margin: 0;
    }
    `}</style>
      <Header/>
      <div style={sidebarStyle}>
        <MarketSchedule/>
        <div>
          <ProduceSection/>
        </div>
      </div>
    </div>
  );
}

export default App;
