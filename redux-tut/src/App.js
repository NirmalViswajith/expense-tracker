import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import store from './components/store';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {isAuth && <UserProfile />}
      {!isAuth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
