import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {

  const loggedIn = !!localStorage.getItem('auth-token')
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to={loggedIn ? "/home" : '/'} className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
        {loggedIn && <>
          <NavItem>
            <NavLink to="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          </>
          }
          {!loggedIn && <>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/register">Register</NavLink>
            </NavItem>
            </>
          }       
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
