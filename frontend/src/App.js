import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Companies from "./routes/Companies";
import Jobs from "./routes/Jobs";
import Profile from "./routes/Profile"
import Login from "./routes/Login";
import RegistrationForm from "./forms/RegistrationForm";
import LoginForm from "./forms/LoginForm";
import LandingPage from "./LandingPage";
import Router from "./Router"

import "./App.css";
import { UserContext } from "./UserContext";

function App() {


    function hasAppliedToJob() {
        return console.log("Works!")
    }
    function applyToJob() {
        return console.log("Works!")
    }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{
            hasAppliedToJob,
            applyToJob

        }}>
            <Router/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
