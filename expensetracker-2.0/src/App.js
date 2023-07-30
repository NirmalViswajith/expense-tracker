import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/Auth/SignUp';
import Login from './Components/Auth/Login';
import Navigation from './Components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Pages/Home';
import UpdateProfile from './Components/Auth/UpdateProfile';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const loginHandler = (loggedIn) => {
    setIsLogged(loggedIn);
  };

  return (
    <div>
      <Navigation isLogged={isLogged} login={loginHandler} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login login={loginHandler} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
      </Routes>
    </div>
  );
}

export default App;
