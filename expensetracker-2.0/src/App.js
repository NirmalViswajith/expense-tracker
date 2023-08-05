import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/Auth/SignUp';
import Login from './Components/Auth/Login';
import Navigation from './Components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom'; // Make sure to import Navigate
import Home from './Components/Pages/Home';
import UpdateProfile from './Components/Auth/UpdateProfile';
import UpdatePassword from './Components/Auth/UpdatePassword';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

function App() {
  const isDarkTheme = useSelector((state) => state.themeReducer.isDark); // Access isDarkTheme from Redux store

  return (
    <div className={`app ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
      </Routes>
    </div>
  );
}

export default App;
