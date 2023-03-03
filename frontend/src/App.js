import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./useLocalStorage"


import jwt from "jsonwebtoken";

import Router from "./Router"
import JoblyApi from "./api/api";


import "./App.css";
import { UserContext } from "./UserContext";
import { Alert } from "reactstrap";


export const TOKEN_STORAGE_ID = "auth-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState("");
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
      "App",
      "infoLoaded=", infoLoaded,
      "currentUser=", currentUser,
      "token=", token,
  );


  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      console.log(token);
      if (token) {
        try {
          let { username } = jwt.decode(token);
          console.log(jwt.decode(token))
        
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

  
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);


  
    function hasAppliedToJob(id) {
      return applicationIds.has(id);
    }

    function applyToJob(id) {
      if (hasAppliedToJob(id)) return;
      JoblyApi.applyToJob(currentUser.username, id);
      setApplicationIds(new Set([...applicationIds, id]));
    }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{
            currentUser,
            setCurrentUser,
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
