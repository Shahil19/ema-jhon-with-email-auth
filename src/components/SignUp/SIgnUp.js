import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SIgnUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        SetConfirmPassword(event.target.value);
    }
    // ? if user is created redirect to expected page
    const navigate = useNavigate();
    if (user) {
        navigate('/');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError('** Password must be 6 characters or longer');
            return;
        }
        if (password !== confirmPassword) {
            setError('** Your two password did not match');
            return;
        }
        setError('');

        createUserWithEmailAndPassword(email, password);
        console.log(`User Name: ${user?.email}`);

    }

    return (
        <div>
            <div className="form-container">
                <div>
                    <h3 className='form-title'>Sign In</h3>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor='email'>Email</label>
                            <input onBlur={handleEmailBlur} type="email" name='email' required />
                        </div>
                        <div className="input-group">
                            <label htmlFor='password'>Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name='password' required />
                        </div>
                        <div className="input-group">
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        {
                            loading && <p>Loading...</p>
                        }
                        {
                            error && <p style={{color: 'red'}}>{error?.message}</p>
                        }
                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>
                        Already Have an Account? <Link className='form-link' to={`/login`}>Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SIgnUp;