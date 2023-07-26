import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const initialState = localStorage.getItem("token");
  const [hasToken, setToken] = useState(initialState);
  const navigate = useNavigate();
  const isLoggedInHandler = !!hasToken;

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    navigate("/home"); // Use navigate to redirect to /home after successful login
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate('/login');
  };

  const userToken = {
    token: hasToken,
    isLoggedIn: isLoggedInHandler,
    addToken: loginHandler,
    clearToken: logoutHandler,
  };

  return (
    <AuthContext.Provider value={userToken}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
