import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <h3>Please Register!!</h3>
            <form action="">
                <input type="text" placeholder='Your  Name' /> <br></br>
                <input type="email" placeholder='Your Email' /><br></br>
                <input type="password" placeholder='Choose Password' /><br></br>
                <input type="submit" value="Register"></input>
            </form>
        </div>
    );
};

export default Register;