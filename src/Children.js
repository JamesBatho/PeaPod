import React, { useState, useContext } from "react";

import UserContext from "./auth/UserContext";
import PeaPodApi from "./api";
import Child from "./components/Child";

function Children() {
  const { currUser, updateCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    allergies: "",
    likes: "",
    parentId: currUser.username,
  });
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    async function createChild() {
      let res = await PeaPodApi.createChild({ ...formData });
      if (res.name) {
        console.log(res);
        console.log("success");
        updateCurrentUser();
      } else {
        console.log("failure");
        console.log(res);
        setFormErrors(res);
      }
    }
    createChild();
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
            <h2> Your Angels </h2>
            {currUser.children.map((child) => {
              return <Child key={child.id} data={child} />;
            })}
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
                  placeholder="Allergies"
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
                  placeholder="Likes"
                  value={formData.likes}
                  className="form-control"
                />
              </div>

              <button className="btn btn-success">Create Child!</button>
              <i> (if only it were always this easy...)</i>
            </form>
            {formErrors?.length > 0 ? showFormErrors(formErrors) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Children;
