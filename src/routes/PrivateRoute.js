import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../auth/UserContext";

// private route
// only completes if there is a current user
// otherwise redirects to homepage

const PrivateRoute = ({ exact, path, children }) => {
  const { currUser } = useContext(UserContext);

  if (!currUser) {
    return <Redirect to="/" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
