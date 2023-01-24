import React from "react";
import Styles from "../Styles/Route-Styles/Login.module.scss";

import { useNavigate } from "react-router-dom";

import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setIsAuth }) => {
  let Navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      Navigate("/");
    });
    console.log("Login Check");
  };

  return (
    <div className={Styles.Page}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Page_Title}>Sign In With Google To Continue</p>
        <button className={Styles.Login_Button} onClick={signInWithGoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
