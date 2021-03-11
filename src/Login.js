import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const[state, dispatch] = useStateValue();
    const signIn = () => {
        //Sign in
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
            });
            
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
               <img 
                   src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                   alt=""
                   /> 
                   <img 
                   src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                   alt=""
                   />    

            </div>
            <Button type="submit" onClick={signIn}
            >
                Sign In
                </Button>
        </div>
    );
}

export default Login;
