import React from 'react';
import './button.scss'

const Button = ({children, googleOAuth, ...props}) => {
    return (
        <button
            className={`${googleOAuth ? 'google-button' : ''} custom-button`}
            {...props}>
                {children}
            </button>
    )
}

export default Button;