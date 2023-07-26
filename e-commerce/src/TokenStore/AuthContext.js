import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  addToken: (token) => {},
  clearToken: () => {},
});

export default AuthContext;
