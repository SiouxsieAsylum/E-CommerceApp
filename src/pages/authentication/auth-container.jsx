import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './auth-container.scss';

const AuthContainer = () => {
    return (
        <div className="auth-container">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default AuthContainer;