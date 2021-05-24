import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./auth/UserContext";

// Site homepage, show welcome message or login/signup buttons

function Home() {
  const { currUser } = useContext(UserContext);

  return (
    <div className="Homepage container text-center">
      <h1 className="m-2"> Jobly </h1>
      <p className="">
        <i>Find what you'll be doing tomorrow, today!</i>
      </p>
      {currUser ? (
        <h3> Welcome back, {currUser.firstName} </h3>
      ) : (
        <p>
          <Link to="/login" className="btn btn-info m-2">
            Login Here
          </Link>
          <Link to="/signup" className="btn btn-info m-2">
            Sign Up Here
          </Link>
        </p>
      )}
    </div>
  );
}

export default Home;
