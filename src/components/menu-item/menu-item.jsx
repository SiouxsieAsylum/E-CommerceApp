import React from 'react';
import { withRouter } from 'react-router-dom'
import './menu-item.scss';

// Destructure the arguments for legibility
const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {
    return (             
    <div
        className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div 
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}/>
                <div
                className="content">
                    <h1 
                    className="title">{title.toUpperCase()}</h1>
                    <span 
                    className="subtitle">SHOP NOW</span>
                </div>
        </div>
        )
}

// withRouter gives menuItem access to three router props: history, location, match
export default withRouter(MenuItem);