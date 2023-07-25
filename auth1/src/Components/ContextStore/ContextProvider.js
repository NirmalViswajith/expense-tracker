import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
})

export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const userisLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
    navigate('/auth');
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