import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // if user is logged in, redirect to expected page 
    const navigate = useNavigate();
    if (user) {
        navigate('/');
    }

    // User Sign In 
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div className="form-container">
                <div>
                    <h3 className='form-title'>Log In</h3>
                    <form onSubmit={handleUserSignIn}>
                        <div className="input-group">
                            <label htmlFor='email'>Email</label>
                            <input onBlur={handleEmailBlur} type="email" name='email' required />
                        </div>
                        <div className="input-group">
                            <label htmlFor='password'>Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name='password' required />
                        </div>
                        <input className='form-submit' type="submit" value="Log In" />
                    </form>
                    {
                        loading && <p>loading...</p>
                    }
                    {
                        error && <p style={{color: 'red'}}>{error?.message}</p>
                    }
                    <p>
                        New to Ema-john? <Link className='form-link' to={`/signup`}>Create a Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;