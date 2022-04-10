import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div className='login'>
            <h3>Please Log in!!</h3>
            <div className='google-login'>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
            <input type="email" placeholder='Your Email' /><br></br>
            <input type="password" placeholder='Choose Password' /><br></br>
            <input type="submit" value="Login"></input>
        </div>
    );
};

export default Login;