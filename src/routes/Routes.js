import React, { Children } from "react";
import NavBar from "./NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import PrivateRoute from "./PrivateRoute";
import Pod from "../Pod";
import Child from "../Child";

function Routes({ login, signup, logout }) {
  return (
    <>
      <NavBar logout={logout} />
      <Switch>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/pods">
          <Pod />
        </PrivateRoute>
        <PrivateRoute exact path="/children">
          <Child />
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
