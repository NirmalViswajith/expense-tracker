import React, {useState} from "react"

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
})

export const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const userisLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };

  const auth = {
    token: token,
    isLoggedIn: userisLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }
  return(
    <AuthContext.Provider value={auth}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;