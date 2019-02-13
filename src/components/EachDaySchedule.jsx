import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import {Card} from 'react-materialize';

function EachDaySchedule({day, location, hours, booth}){
  return(
    <div>
      <p>
        {day}
        <br/>
        {location}
        <br/>
        {hours}
        <br/>
        {booth}
      </p>
    </div>

  );
}

EachDaySchedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default EachDaySchedule;
