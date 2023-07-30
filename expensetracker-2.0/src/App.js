import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/Auth/SignUp';
import Login from './Components/Auth/Login';
import Navigation from './Components/Navigation/Navigation';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Components/Pages/Home';
import UpdateProfile from './Components/Auth/UpdateProfile';
import UpdatePassword from './Components/Auth/UpdatePassword';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if(storedToken){
      setIsLogged(true);
    }
  }, [])

  const loginHandler = (loggedIn) => {
    setIsLogged(loggedIn);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
    // navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div>
      <Navigation isLogged={isLogged} login={loginHandler} logout={logoutHandler} navigate={navigate}/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login login={loginHandler} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path='/updatePassword' element={<UpdatePassword />} />
      </Routes>
    </div>
  );
}

export default App;
