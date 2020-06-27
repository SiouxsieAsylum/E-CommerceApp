import React from 'react';
import './menu-item.scss';

const MenuItem = (props) => {
    return (             
    <div
        className="menu-item">
                <div
                className="content">
                    <h1 
                    className="title">{props.section.title.toUpperCase()}</h1>
                    <span 
                    className="subtitle">{props.section.subtitle.toUpperCase()}</span>
                </div>
        </div>
        )
}

export default MenuItem;