import React, {useEffect, useState, useCallback } from "react";
import { NavLink, useRouteMatch, useHistory } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";

function NavBar() {
  const loginMatch = !!useRouteMatch('/login')
  const signupMatch = !!useRouteMatch('/register')
  const landingPageMatch = !!useRouteMatch({
    path: "/",
    exact: true
  })
  const history = useHistory()
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('auth-token'))
  
  const logout= useCallback((evt) => {
    evt.preventDefault();
    localStorage.removeItem('auth-token')
    setLoggedIn(false)
    history.push('/')
}, [history, setLoggedIn])

  useEffect(() => {
    const tokenExists = localStorage.getItem('auth-token');
    console.log(loginMatch, signupMatch, landingPageMatch)
    if(loginMatch || signupMatch || landingPageMatch) {
      if(tokenExists) {
      setLoggedIn(true)
      history.push('/home')
      return
      }
    }
    else if(!tokenExists) {
      console.log('here')
      setLoggedIn(false)
      history.push('/')
      return
    }
    else {
      setLoggedIn(true)
    }
  }, [loginMatch, signupMatch, landingPageMatch, history, setLoggedIn])


  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavLink exact to={loggedIn ? "/home" : '/'} className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
        {loggedIn && <>
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
            <NavLink onClick={logout} to="/">Log out</NavLink>
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
