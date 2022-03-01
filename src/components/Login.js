import React, { useState} from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { db } from "../firebase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const signIn = (e)=>{
    e.preventDefault();
    // Some fancy firebase login Shittt....
    auth 
      .signInWithEmailAndPassword(email,password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))

  }

  const signUp = (e)=>{
    e.preventDefault();
    // Do some fancy firebase register shitttttt..
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth)=>{
        // It succesfully created a new user with email and password
        console.log(auth);
        if(auth){
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
            alt="Amazon"
          />
        </Link>
        <div className="login_container">
            <h1>Sign In</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className="login_button">Sign In</button>
            </form>
            <p>
                By signing-in you agree to the Amazon's conditions of use and sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads.
            </p>

            <button onClick={signUp} className="signup_button">Create your Account</button>
        </div>
      </div>
    </>
  );
}

export default Login;
