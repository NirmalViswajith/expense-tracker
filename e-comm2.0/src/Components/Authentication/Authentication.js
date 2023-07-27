import React, { useContext, useRef, useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import cartContext from '../Conrext-store/CartContext';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [sendingReq, setSendingReq] = useState(false);
  const ctx = useContext(cartContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSendingReq(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_API_KEY';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR_API_KEY';
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      setSendingReq(false);
      if (res.ok) {
        let data = res.json();
        data.then((resp) => {
          ctx.login(resp.idToken);
          ctx.userEmailTrack(enteredEmail.replace(/[@.]/g, ''));
          history('/store');
          console.log('EmailOfUser', ctx.emailOfUser);
        });
      } else {
        const data = res.json();
        data.then((data) => {
          alert(data.error.message);
        });
      }
    });
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <h3 className='text-center'>
                {isLogin ? 'Login' : 'Sign Up'}
              </h3>
            </div>
            <div className='card-body'>
              <form onSubmit={submitHandler}>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='form-control'
                    ref={emailInputRef}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    className='form-control'
                    ref={passwordInputRef}
                    required
                  />
                </div>
                <div className='d-grid'>
                  {sendingReq ? (
                    <button className='btn btn-primary' type='button' disabled>
                      Sending Request...
                    </button>
                  ) : (
                    <button className='btn btn-primary' type='submit'>
                      {isLogin ? 'Login' : 'Create Account'}
                    </button>
                  )}
                </div>
              </form>
              <div className='text-center mt-3'>
                <button
                  type='button'
                  className='btn btn-link'
                  onClick={switchAuthModeHandler}
                >
                  {isLogin
                    ? 'Create new account'
                    : 'Login with existing account'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
