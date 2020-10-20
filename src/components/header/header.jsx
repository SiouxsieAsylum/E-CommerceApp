import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseUtils'
import './header.scss';

// TODO: Semantic coding for accessibility
const Header = ({ user }) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                user ?
                <span className="option" onClick={() => auth.signOut()}>SIGN OUT</span>
                : 
                <Link className='option' to='/sign-in'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;