import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    isAdmin: false,
  });
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await signup(formData);
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
    <div className="Signup container">
      <h3 className="m-3"> Signup for Jobly!</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username"> Username </label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={formData.username}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"> Password </label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName"> First Name </label>
          <input
            onChange={handleChange}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName"> Last Name </label>
          <input
            onChange={handleChange}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"> Email </label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">
            {" "}
            Address (required for location services){" "}
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            className="form-control"
          />
        </div>
        <button className="btn btn-success"> Signup!</button>
      </form>
      {formErrors.length > 0 ? showFormErrors(formErrors) : null}
    </div>
  );
}

export default Signup;
