import React, { useState, useContext } from "react";

import UserContext from "../auth/UserContext";
import createAppointment from "../api";
import { useHistory } from "react-router-dom";

function Appointment() {
  const { currUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    isHost: false,
    description: "",
    childSlots: 1,
    startTime: "",
    endTime: "",
    creatorId: currUser.username,
    podId: currUser.pod,
  });
  const [formErrors, setFormErrors] = useState([]);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await createAppointment(formData);
    console.log(res);
    if (res.success) {
      history.push("/home");
    } else {
      setFormErrors(res.err);
    }
  };

  const showFormErrors = (errors) => {
    return <p> {errors} </p>;
  };

  return (
    <div>
      <h1> Appointment Creator </h1>
      <div className="container">
        <div className="col-sm-6 appointmentForm">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="isHost"> Hosting? </label>
              <input
                onChange={handleChange}
                type="checkbox"
                id="isHost"
                placeholder="isHost"
                value={formData.isHost}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description"> Description </label>
              <input
                onChange={handleChange}
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                value={formData.description}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="childSlots"> Child Slots</label>
              <input
                onChange={handleChange}
                type="number"
                id="childSlots"
                name="childSlots"
                placeholder="Number of children"
                value={formData.childSlots}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="startTime"> Start Time </label>
              <input
                onChange={handleChange}
                type="datetime-local"
                id="startTime"
                name="startTime"
                placeholder="Last Name"
                value={formData.startTime}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="endTime"> End Time </label>
              <input
                onChange={handleChange}
                type="datetime-local"
                id="endTime"
                name="endTime"
                placeholder="Last Name"
                value={formData.endTime}
                className="form-control"
              />
            </div>
            <button className="btn btn-success">Create Appointment!</button>
          </form>
          {formErrors.length > 0 ? showFormErrors(formErrors) : null}
        </div>
      </div>
    </div>
  );
}

export default Appointment;
