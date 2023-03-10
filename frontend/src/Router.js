import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import CompanyDetail from "./company/CompanyDetail"
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Companies from "./routes/Companies";
import Jobs from "./routes/Jobs";
import Profile from "./routes/Profile"
import RegistrationForm from "./forms/RegistrationForm";
import LoginForm from "./forms/LoginForm";
import LandingPage from "./LandingPage";

import "./Router.css"


function Router() {

  return (
    <>
        <NavBar className="nav-bar" />
          <main className="main">
              <Switch>
                  <Route exact path="/">
                      <LandingPage />
                  </Route>
                  <Route path="/home">
                      <Home />
                  </Route>
                  <Route exact path="/companies">
                      <Companies />
                  </Route>
                  <Route path="/companies/:handle">
                      <CompanyDetail />
                  </Route>
                  <Route path="/jobs">
                      <Jobs />
                  </Route>
                  <Route path="/profile">
                      <Profile />
                  </Route>
                  <Route path="/login">
                        <LoginForm />
                  </Route>
                  <Route exact path="/register">
                        <RegistrationForm />
                  </Route>
                  <Route>
                      <NotFound />
                  </Route>
              </Switch>
          </main>
        </>
  );
}

export default Router;
