import { useState } from 'react';
import classes from './AuthForm.module.css';
import { Button } from 'react-bootstrap';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Simulate loading for 2 seconds, replace this with your actual authentication request
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Email Exists');
    }, 2000);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {isLoading ? (
            <p className='text-white'>Sending request...</p>
          ) : (
            <Button type="submit">Create Account</Button>
          )}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
