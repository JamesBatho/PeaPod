import React, { useState, useEffect, useContext } from "react";
import PeaPodApi from "./api";
import UserContext from "./auth/UserContext";
import Appointment from "./components/AppointmentCreator";

function Pod() {
  // User stuff
  const { currUser, setCurrUser } = useContext(UserContext);

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function loadUsers() {
      const userList = await PeaPodApi.getUsers();
      setUsers(userList);
    }
    loadUsers();
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function loadUsers() {
      const userList = await PeaPodApi.getUsers(search);
      setUsers(userList);
    }
    loadUsers();
    setSearch("");
  };

  // Pod stuff
  function handleChangePod(e) {
    setName(e.target.value);
  }

  const handleSubmitPod = (e) => {
    e.preventDefault();
    async function createPod() {
      const data = { name: name, userId0: currUser.username };
      const pod = await PeaPodApi.createPod(data);
      currUser.pod = pod.id;
      setCurrUser(currUser);
    }
    createPod();
  };

  return (
    <div className="Pod container">
      <div className="PodForm">
        {currUser.pod.length === 0 && (
          <>
            <p>
              It looks like you dont have a pod just yet... Create one below!
            </p>
            <form onSubmit={handleSubmitPod}>
              <div className="form-group">
                <label> Pod Name: </label>
                <input
                  name="firstName"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => handleChangePod(e)}
                />
              </div>
              <button className="btn btn-success"> Create your Pod! </button>
            </form>
          </>
        )}
      </div>

      {currUser.pod.length !== 0 && (
        <>
          <h1> Your current pod is: {currUser.pod} </h1>
          <p>
            Add some members to your pod and simplify your childcare experience.
          </p>
          <h2 className="mt-3 ml-2"> PeaPod Member Database </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group m-2">
              <label htmlFor="search">
                Search for members to add to your pod!
              </label>
              <input
                className="form-control"
                value={search}
                type="text"
                placeholder="Search"
                id="search"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button className="btn btn-info m-2"> Search</button>
          </form>
        </>
      )}

      {currUser.pod && <Appointment />}
    </div>
  );
}

export default Pod;
