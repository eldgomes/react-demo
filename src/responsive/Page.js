import React from 'react';

//import header from '../images/responsive/header.svg';
//import content from '../images/responsive/content.svg';
import illustrationSmall from '../images/responsive/illustration-small.png';
import illustrationBig from '../images/responsive/illustration-big.png';
import photoSmall from '../images/responsive/photo-small.jpg';
import photoBig from '../images/responsive/photo-big.jpg';
import photoTall from '../images/responsive/photo-tall.jpg';
import signUp from '../images/responsive/sign-up.svg';
import feature from '../images/responsive/feature.svg';

import './Page.css';;

function Page (props) {
    return (
        <>
            <div className='page'>
                <div className='section menu'></div>
                <div className='section header'>
                    <div class='photo'>
                        <picture>
                            <source media='(min-width: 401px)'
                                    srcSet={`${photoBig}`}/>
                            <source media='(max-width: 400px)'
                                    srcSet={`${photoTall}`}/>
                            <img src='images/photo-small.jpg'/>
                        </picture>
                    </div>
                </div>
                <div className='section content'>
                <div class='illustration'>
                    <img src={illustrationSmall}
                        srcSet={`${illustrationSmall} 1x, ${illustrationBig} 2x`}
                        style={{maxWidth: '500px'}}/>
                </div>
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