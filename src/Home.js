import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./auth/UserContext";
import Schedule from "./Schedule";
import Testimonial from "./components/Testimonial";
import NewsStory from "./components/NewsStory";

// Site homepage, show welcome message or login/signup buttons

function Home() {
  const { currUser } = useContext(UserContext);

  return (
    <div className="Homepage container-fluid text-center">
      <div className="row">
        <div className="col-sm-3 news">
          <h1> News </h1>
          <NewsStory
            header="Big News"
            blurb="PeaPod is disrupting the childcare system"
            author="New York Times"
          />
          <NewsStory
            header="Extra Extra Extra"
            blurb="New childcare system is crushing it!"
            author="Washington Post"
          />
          <NewsStory
            header="The New Face of Childcare"
            blurb="Parents are switching over and never looking back."
            author="Boston Herald"
          />
        </div>
        <div className="col-sm-6 main">
          <h1 className="m-4"> PeaPod </h1>
          <p className="">
            <i>Streamlining your informal childcare needs</i>
          </p>
          {currUser ? (
            <>
              <h3> Welcome back, {currUser.firstName} </h3>

              <Schedule />
            </>
          ) : (
            <>
              <p>
                <Link to="/login" className="btn btn-info m-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-info m-2">
                  Sign Up
                </Link>
              </p>
              <p> Just want to check it out? </p>
              <p>
                Login with these credentials
                <br />
                Username: tester
                <br />
                Password: test123
              </p>
            </>
          )}
        </div>
        <div className="col-sm-3 story">
          <h1> Reviews</h1>
          <Testimonial
            header="I love PeaPod!"
            blurb="Really simplified my childcare experience"
            name="Michael S"
          />
          <Testimonial
            header="Lifesaver!!!"
            blurb="PeaPod allowed me to stop stressing about childcare"
            name="Erica E"
          />
          <Testimonial
            header="Great Service!"
            blurb="I honestly don't even know what I did before PeaPod"
            name="Jennifer K"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
