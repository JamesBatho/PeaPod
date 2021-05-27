import React, { useState, useContext } from "react";

import UserContext from "./auth/UserContext";
import createChild from "./api";
import { useHistory } from "react-router-dom";

function Child() {
  const { currUser, setCurrUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    allergies: "",
    likes: "",
    parentId: currUser.username,
  });
  const [formErrors, setFormErrors] = useState([]);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await createChild(formData);
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
      <h1> Children </h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3> Your Angels </h3>
            <h4> Child 1</h4>
            <h4> Chld 2</h4>
          </div>
          <div className="col-sm-6 childForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  value={formData.name}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age"> age </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="age"
                  name="age"
                  placeholder="age"
                  value={formData.age}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="allergies"> Allergies</label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="allergies"
                  name="allergies"
                  placeholder="First Name"
                  value={formData.allergies}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="likes"> Likes </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="likes"
                  name="likes"
                  placeholder="Last Name"
                  value={formData.likes}
                  className="form-control"
                />
              </div>

              <button className="btn btn-success">Create Child!</button>
              <span>(if only it were always this easy...)</span>
            </form>
            {formErrors.length > 0 ? showFormErrors(formErrors) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Child;
