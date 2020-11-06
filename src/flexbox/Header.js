import React from 'react';
import logo from '../images/flexbox/awesome-logo.svg';
import icons from '../images/flexbox/social-icons.svg';
import './Header.css';

function Header (props) {
    return (
        <div class='header-container'>
            <div class='header'>
                <div class='subscribe'>Subscribe &#9662;</div>
                <div class='logo'><img src={logo}/></div>
                <div class='social'><img src={icons}/></div>
            </div>
        </div>
    );
}

export default Header;