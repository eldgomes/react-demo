import React from 'react';
import './Menu.css';

function Menu (props) {
    return (
        <div class='menu-container'>
            <div class='menu'>
                <div class='date'>Aug 14, 2016</div>
                <div class='signup'>Sign Up</div>
                <div class='login'>Login</div>
            </div>
        </div>
    );
}

export default Menu;