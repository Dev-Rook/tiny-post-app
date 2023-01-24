import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import "../Styles/Imported-Styles/GoogleButton.module.scss";
import Styles from "../Styles/Route-Styles/Login.module.scss";

import { useNavigate } from "react-router-dom";

import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setIsAuth }) => {
  TabTitle("Tiny Post | Login");

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
        <button
          type="button"
          className="login-with-google-btn"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
