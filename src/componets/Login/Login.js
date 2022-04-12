import { faRandom } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailBlur = e => {
        const emailInput = e.target.value;
        setEmail(emailInput)
    }
    const handlePasswordBlur = e => {
        const passwordInput = e.target.value;
        setPassword(passwordInput)
    }
    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p> loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Log in" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to={"/signup"}>Create A New Account</Link>
                </p>
                <p className='optional-link'>Or</p>
            </div>
        </div>
    );
};

export default Login;