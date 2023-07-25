import { useState, useRef } from 'react';
import classes from './AuthForm.module.css';
import { Button } from 'react-bootstrap';

const AuthForm = () => {
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const details = {
      email: enteredEmail.current.value,
      password: enteredPassword.current.value,
      returnSecureToken: true,
    };
  
    setIsLoading(true);
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4AGudc26asu08SmQDiibfZk5QRfHJMVo';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4AGudc26asu08SmQDiibfZk5QRfHJMVo';
    }
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Authentication failed.'); 
        }
      })
      .then((data) => {
        console.log('idToken (JWT):', data.idToken);
      })
      .catch((error) => {
        alert(error.message); 
      });
  };
  

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={enteredEmail}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={enteredPassword}/>
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
