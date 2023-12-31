
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Components/Pages/SignUp';
import Welcome from './Components/Pages/Welcome';
import {useSelector} from 'react-redux'
import ForgotPassword from './Components/Pages/ForgotPassword';
import Send from './Components/Email/Send';
import ReadMsg from './Components/Email/ReadMsg';
import Inbox from './Components/Email/Inbox';
import SentBox from './Components/Email/Sentbox';

function App() {

  const isAuth=useSelector(state=>state.auth.isAuthenicate)
  console.log(isAuth);
  return (
    <Fragment>
      <Routes>
        
      <Route path='/' element={isAuth ? <Welcome /> : <SignUp />}></Route>
      {/* <Route path='/welcome' element={isAuth ? <Welcome /> : <SignUp />} /> */}
      <Route path='/forgotPassword' element={!isAuth ? <ForgotPassword /> : <Welcome />} />
      <Route path='/send' element={isAuth ? <Send /> : <SignUp />} />
      <Route path='/inbox' element={isAuth ? <Inbox /> : <SignUp />} />
      <Route path='/sentbox' element={isAuth ? <SentBox /> : <SignUp />} />
      <Route path='/message/:id' element={isAuth ? <ReadMsg /> : <SignUp />} /> 
      </Routes>
      </Fragment>
  );
}

export default App;
