import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./auth/UserContext";
import Schedule from "./Schedule";

// Site homepage, show welcome message or login/signup buttons

function Home() {
  const { currUser } = useContext(UserContext);

  return (
    <div className="Homepage container-fluid text-center">
      <div className="row">
        <div className="col-sm-2 news">
          <h1> news story</h1>
        </div>
        <div className="col-sm-6 main">
          <h1 className="m-2"> PeaPod </h1>
          <p className="">
            <i>Streamlining your informal childcare needs</i>
          </p>
          {currUser ? (
            <>
              <h3> Welcome back, {currUser.firstName} </h3>

              <Schedule />
            </>
          ) : (
            <p>
              <Link to="/login" className="btn btn-info m-2">
                Login
              </Link>
              <Link to="/signup" className="btn btn-info m-2">
                Sign Up
              </Link>
            </p>
          )}
        </div>
        <div className="col-sm-3">
          <h1> Testimonials list</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
