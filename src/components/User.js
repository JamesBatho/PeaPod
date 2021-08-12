import React, { useContext } from "react";
import "./User.css";
import PeaPodApi from "../api";
import UserContext from "../auth/UserContext";

function User({ data }) {
  const { currUser } = useContext(UserContext);
  const { username, firstName, lastName } = data;
  async function addUser() {
    const res = await PeaPodApi.addMember({
      userId0: currUser.username,
      userId1: username,
      name: currUser.pod.name,
    });
    console.log(res);
    console.log("added me!");
  }
  return (
    <div className="user">
      <h3>
        {firstName} {lastName}
      </h3>
      <p>
        <i> {username} </i>
      </p>
      <button className="ml-2 btn btn-success" onClick={() => addUser()}>
        Add Me!
      </button>
    </div>
  );
}

export default User;
