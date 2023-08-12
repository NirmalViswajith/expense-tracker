
import { Form, Button, Container } from 'react-bootstrap';

import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../storeRedux/authReducer';

const SignUp = () => {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [confPass,setconfPass]=useState('')
    const [isCursorAllow,SetisCursorAllow]=useState(true)
    const [isLogin,setIsLogin]=useState(true);
    const redirect=useNavigate();

    const dispatch=useDispatch()

    const emailChangeHandler =(e)=>{
        setemail(e.target.value)
    }
const passwordChangeHandler =(e)=>{
    setpassword(e.target.value)
    SetisCursorAllow(false)
}

    const confPassChangeHandler =(e)=>{
        setconfPass(e.target.value)
        SetisCursorAllow(false)
    };

    const switchAuthModeHandler =()=>{
        setIsLogin((prev)=>!prev)
    }

    const submitHandler = async(e)=>{
        e.preventDefault()
      if(!isLogin){ 
         if(confPass!==password){
            return alert('Confirm password and password is not same');
        }}
        let url;
        if(isLogin){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDWOgewXwJ6MF_blTFfNdTdCj3c5sehREw';
        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDWOgewXwJ6MF_blTFfNdTdCj3c5sehREw';
        }
      
        const singUp=await fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:email,
                password:password
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await singUp.json()
        console.log(data,'data');
        if(!singUp.ok){
            alert(data.error.message)
        }else{
            localStorage.setItem('token',data.idToken);
            console.log('sign up successfully');
            localStorage.setItem('email',email)
            dispatch(authActions.login())
            redirect('/')
        }
      
    }
    return (
        <div className="d-flex justify-content-center">
            <Container style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Make sure the container takes up the full viewport height
    }}>
            <Form onSubmit={submitHandler} className="p-6 bg-white rounded-lg shadow-md" style={{ maxWidth: '600px' }}>
                <h1 className="text-xl mb-4 font-semibold text-center">
                    {isLogin ? 'Login' : 'Create New Account'}
                </h1>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className='mr-4'>Email Address:</Form.Label>
                    <Form.Control
                    className='bg-dark'
                        type="email"
                        required
                        onChange={emailChangeHandler}
                        value={email}
                        placeholder="Enter your email"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className='mr-5'>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        required
                        onChange={passwordChangeHandler}
                        value={password}
                        placeholder="Enter your password"
                    />
                </Form.Group>
                {!isLogin && (
                    <Form.Group className="mb-3" controlId="confPass">
                        <Form.Label className='mr-5'>Confirm Password:</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            onChange={confPassChangeHandler}
                            value={confPass}
                            placeholder="Confirm your password"
                        />
                    </Form.Group>
                )}
                <div className=" d-flex justify-content-center mb-3">
                    {isLogin && (
                        <Link className="block text-sm mb-2 text-blue-500 hover:underline" to="/forgotPassword">
                            Forgot Password?
                        </Link>
                    )}
                    <Button
                        type="submit"
                        variant="primary"
                        className={isCursorAllow ? 'cursor-not-allowed' : 'w-100'}
                        style={{border: '2px solid #000', // Replace with your preferred border style
                        borderRadius: '6px',
                    maxWidth:'90px',
                padding: '5px'   }}
                        disabled={isCursorAllow}
                    >
                        {isLogin ? <b>Login</b> : 'Create Account'}
                    </Button>
                </div>
                <Button
                    type="button"
                    variant="link"
                    className="text-blue-500 hover:underline w-100"
                    onClick={switchAuthModeHandler}
                >
                    {isLogin ? "Don't have an account? Sign Up" : 'Login with an existing account'}
                </Button>
            </Form>
            </Container>
        </div>)    }
    

export default SignUp
