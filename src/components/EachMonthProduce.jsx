import React from 'react';
import PropTypes from 'prop-types';

function EachMonthProduce({month, selection}){
  return(
    <div className="red-color">
      <style jsx global>{`
    .red-color {
    background-color: red;
    }
    .red-color:hover {
    background-color: blue;
    }
    `}</style>
      <p>{month}</p>
      <p>{selection}</p>
      <hr/>
    </div>
  );
}

EachMonthProduce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default EachMonthProduce;
