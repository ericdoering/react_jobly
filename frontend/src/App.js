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

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <main>
              <Switch>
                  <Route path="/home">
                      <Home />
                  </Route>
                  <Route path="/companies">
                      <Companies />
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
                  <Route>
                      <NotFound />
                  </Route>
              </Switch>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
