import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import {CollapsibleItem} from 'react-materialize';

function EachMonthProduce({month, selection}){
  return(
    <CollapsibleItem header={month} icon='calendar_today'>
      <ul>{selection.map((produce, index) =>
        <li value={index}>{produce}
        </li>
      )}</ul>
    </CollapsibleItem>
  );
}


EachMonthProduce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default EachMonthProduce;
