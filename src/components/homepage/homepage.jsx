import React from 'react';
import './homepage.styles.scss'

const Homepage = () => (
    <div
     className="homepage">
        <div
        className="directory-menu">
            <div
            className="menu-item high">
                    <div
                    className="content">
                        <h1 
                        className="title">HATS</h1>
                        <span 
                        className="subtitle">SHOP NOW</span>
                    </div>
            </div>
            <div
            className="menu-item high">
                    <div
                    className="content">
                        <h1 
                        className="title">SCARVES</h1>
                        <span 
                        className="subtitle">SHOP NOW</span>
                    </div>
            </div>
            <div
            className="menu-item high">
                    <div
                    className="content">
                        <h1 
                        className="title">GLOVES</h1>
                        <span 
                        className="subtitle">SHOP NOW</span>
                    </div>
            </div>
            <div
            className="menu-item low">
                    <div
                    className="content">
                        <h1 
                        className="title">SUNGLASSES</h1>
                        <span 
                        className="subtitle">SHOP NOW</span>
                    </div>
            </div>
            <div
            className="menu-item low">
                    <div
                    className="content">
                        <h1 
                        className="title">JEWELRY</h1>
                        <span 
                        className="subtitle">SHOP NOW</span>
                    </div>
            </div>
        </div>
    </div>
)

export default Homepage;