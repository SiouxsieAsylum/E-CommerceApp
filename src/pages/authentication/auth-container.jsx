import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import './auth-container.scss';

const AuthContainer = () => {
    return (
        <div className="auth-container">
            <SignIn />
        </div>
    )
}

export default AuthContainer;