import React from 'react';

import header from '../images/responsive/header.svg';
import content from '../images/responsive/content.svg';
import signUp from '../images/responsive/sign-up.svg';
import feature from '../images/responsive/feature.svg';

import './Page.css';;

function Page (props) {
    return (
        <>
            <div className='page'>
                <div className='section menu'></div>
                <div className='section header'>
                    <img src={header}/>
                </div>
                <div className='section content'>
                    <img src={content}/>
                </div>
                <div className='section sign-up'>
                    <img src={signUp}/>
                </div>
                <div className='section feature-1'>
                    <img src={feature}/>
                </div>
                <div className='section feature-2'>
                    <img src={feature}/>
                </div>
                <div className='section feature-3'>
                    <img src={feature}/>
                </div>
            </div>
        </>
    );
}

export default Page;