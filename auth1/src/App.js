import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
import Userprofile from './Components/Profile/Userprof';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile' element={<Userprofile />} />
      </Routes>
    </Layout>
  );
}

export default App;
