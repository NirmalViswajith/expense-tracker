import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
})

export const AuthProvider = (props) => {
  const initialState = localStorage.getItem('token');
  const navigate = useNavigate();
  const [token, setToken] = useState(initialState);
  const userisLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token', token);
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