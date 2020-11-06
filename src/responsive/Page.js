import React from 'react';

import header from '../images/responsive/header.svg';
import content from '../images/responsive/content.svg';
import signUp from '../images/responsive/sign-up.svg';
import feature from '../images/responsive/feature.svg';

import './Page.css';;

function Page (props) {
    return (
        <>
            <div class='page'>
                <div class='section menu'></div>
                <div class='section header'>
                    <img src={header}/>
                </div>
                <div class='section content'>
                    <img src={content}/>
                </div>
                <div class='section sign-up'>
                    <img src={signUp}/>
                </div>
                <div class='section feature-1'>
                    <img src={feature}/>
                </div>
                <div class='section feature-2'>
                    <img src={feature}/>
                </div>
                <div class='section feature-3'>
                    <img src={feature}/>
                </div>
            </div>
        </>
    );
}

export default Page;