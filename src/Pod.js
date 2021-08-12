import React, { useState, useContext } from "react";
import PeaPodApi from "./api";
import UserContext from "./auth/UserContext";
import Appointment from "./components/AppointmentCreator";
import User from "./components/User";

function Pod() {
  // User stuff
  const { currUser, setCurrUser } = useContext(UserContext);

  console.log(currUser);

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("searching for ");
    console.log(search);
    e.preventDefault();
    async function loadUsers() {
      const userList = await PeaPodApi.getUsers();
      console.log(userList);

      setUsers(userList);
      console.log(userList);
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
        {!currUser.pod && (
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
      {currUser.pod && (
        <>
          <h1> Your current pod is: {currUser.pod.name} </h1>
          {!currUser.pod.userId1 && (
            <p>
              Add some members to your pod and simplify your childcare
              experience.
            </p>
          )}
          {currUser.pod.userId1 && (
            <div>
              <h3> Current Members: </h3>
              <p>
                {" "}
                {currUser.pod.userId0} and {currUser.pod.userId1}{" "}
              </p>
            </div>
          )}

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
          {users && (
            <div>
              {users.map((user) => {
                return <User key={user.username} data={user} />;
              })}
            </div>
          )}
        </>
      )}
      {currUser.pod && <Appointment />}
    </div>
  );
}
export default Pod;
