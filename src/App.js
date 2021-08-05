import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PeaPodApi from "./api";
import UserContext from "./auth/UserContext";
import jwt from "jsonwebtoken";
import Routes from "./routes/Routes";
import useLocalStorage from "./hooks/useLocalStorage";

// key for local storage
export const TOKEN_STORAGE_ID = "peapod-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currUser, setCurrUser] = useState(null);

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            PeaPodApi.token = token;
            let currUser = await PeaPodApi.getCurrUser(username);
            setCurrUser(currUser);
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrUser(null);
          }
        }
      }
      getCurrentUser();
    },
    [token]
  );

  const login = async (data) => {
    try {
      let token = await PeaPodApi.login(data);
      setToken(token);
      return { success: true };
    } catch (err) {
      return { success: false, err };
    }
  };

  const logout = () => {
    setCurrUser(null);
    setToken(null);
  };

  const signup = async (data) => {
    try {
      let token = await PeaPodApi.signup(data);
      setToken(token);
      console.log(token);
      return { success: true };
    } catch (err) {
      return { success: false, err };
    }
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currUser, setCurrUser }}>
        <div className="App">
          <Routes login={login} signup={signup} logout={logout}></Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
