import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';
import {Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Send from './Components/Mail/Send';
import Header from './Components/Pages/Header';


function App() {
  const auth = useSelector(state => state.auth.isAuth);
  
  console.log(auth)
  return (
    <div>
      
      <Header />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        {auth && <Route path='/home' element={<Home />} />}
        <Route path='/send' element={<Send />} />
      </Routes>
    </div>
  );
}

export default App;
