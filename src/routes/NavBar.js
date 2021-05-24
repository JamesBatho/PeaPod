import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "../auth/UserContext";

function NavBar({ logout }) {
  const { currUser } = useContext(UserContext);

  function navBarLoggedIn() {
    return (
      <>
        <NavItem>
          <NavLink to="/companies">Companies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/jobs">Jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink id="logout" to="/" onClick={logout}>
            Logout
          </NavLink>
        </NavItem>
      </>
    );
  }

  function navBarLoggedOut() {
    return (
      <>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup">Signup</NavLink>
        </NavItem>
      </>
    );
  }

  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Home
        </NavLink>
        <Nav className="ml-auto" navbar>
          {currUser ? navBarLoggedIn() : navBarLoggedOut()}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
