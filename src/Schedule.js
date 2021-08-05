import React from "react";
import Appointment from "./components/Appointment";
import UserContext from "./auth/UserContext";
import { useContext } from "react";

function Schedule() {
  const { currUser } = useContext(UserContext);
  return (
    <div>
      <h1> Your Next appointments are:</h1>
      <h3> appointment 1 </h3>
      {currUser.appointments.map((appointment) => {
        return <Appointment data={appointment} />;
      })}
      {/* list of 6-7 most recent appointments */}
      {/* to see all go to appointments page */}
    </div>
  );
}

export default Schedule;
