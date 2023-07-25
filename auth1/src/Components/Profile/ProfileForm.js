import classes from "./ProfileForm.module.css";
import React, { useRef, useContext } from "react";
import AuthContext from "../ContextStore/ContextProvider";
import {useNavigate} from 'react-router-dom';
const ProfileForm = () => {
  const enteredPassword = useRef();
  const ctx = useContext(AuthContext);
  const history = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const newPassword = enteredPassword.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD4AGudc26asu08SmQDiibfZk5QRfHJMVo",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then((res) => {
      history('/auth');
    })
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength='7' ref={enteredPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
