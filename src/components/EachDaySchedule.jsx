import React from 'react';
import PropTypes from 'prop-types';

function EachDaySchedule({day, location, hours, booth}){
  return(
    <div className="red-color">
      <style jsx global>{`
    .red-color {
    background-color: green;
    }
    .red-color:hover {
    background-color: blue;
    }
    `}</style>
      <p>{day}</p>
      <p>{location}</p>
      <p>{hours}</p>
      <p>{booth}</p>
      <hr/>
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
