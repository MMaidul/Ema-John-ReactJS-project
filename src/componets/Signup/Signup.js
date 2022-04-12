import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.init'
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = e => {
        const emailInput = e.target.value;
        setEmail(emailInput)
    }
    const handlePasswordBlur = e => {
        const passwordInput = e.target.value;
        setPassword(passwordInput)
    }
    const handleConfirmPassword = e => {
        const confirmPasswordInput = e.target.value;
        setConfirmPassword(confirmPasswordInput)
    }
    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">confirm-Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input className='form-submit' type="submit" value="Sign up" />
                    </form>
                    <p>
                        Already Have An Account? <Link className='form-link' to={"/login"}>Lon in</Link>
                    </p>
                    <p className='optional-link'>Or</p>
                </div>
            </div>
        </div>
    );
};

export default Signup;