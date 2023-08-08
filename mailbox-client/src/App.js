import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
