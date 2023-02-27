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

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
