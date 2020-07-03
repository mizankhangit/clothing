import React from "react";

import "./signin-and-signup.scss";
import SignIn from "./Signin";
import SignUp from "../../components/sign-up/SignUp";

const SigninAndSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninAndSignup;
