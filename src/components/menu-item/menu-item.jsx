import React from 'react';
import './menu-item.scss';

const MenuItem = ({section}) => {
    return (             
    <div
        className="menu-item">
                <div
                className="content">
                    <h1 
                    className="title">{section.title.toUpperCase()}</h1>
                    <span 
                    className="subtitle">SHOP NOW</span>
                </div>
        </div>
        )
}

export default MenuItem;