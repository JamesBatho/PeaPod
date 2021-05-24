import React from "react";
import NavBar from "./NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";
import Companies from "../companies/Companies";
import Jobs from "../jobs/Jobs";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import CompanyDetail from "../companies/CompanyDetail";
import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup, logout }) {
  return (
    <>
      <NavBar logout={logout} />
      <Switch>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
          <CompanyDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/companies">
          <Companies />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <Jobs />
        </PrivateRoute>
        <Route exact path="/login">
          <Login login={login} />
        </Route>
        <Route exact path="/signup">
          <Signup signup={signup} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}

export default Routes;
