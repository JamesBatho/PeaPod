import React from "react";

function Appointment({ isHost, description, childSlots, startTime, endTime }) {
  return (
    <div>
      {isHost && (
        <p>
          I can watch {childSlots} children from {startTime} to {endTime}
        </p>
      )}
      {!isHost && (
        <p>
          I need someone to watch {childSlots} children from {startTime} to
          {endTime}
        </p>
      )}
      <p> {description} </p>
    </div>
  );
}

export default Appointment;
