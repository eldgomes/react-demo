import React from 'react';
import one from '../images/flexbox/one.svg';
import two from '../images/flexbox/two.svg';
import three from '../images/flexbox/three.svg';
import './PhotoGrid.css';

function PhotoGrid (props) {
    const four = require('../images/flexbox/four.svg');
    return (
        <>
            <div class='photo-grid-container'>
                <div class='photo-grid'>
                    <div class='photo-grid-item first-item'>
                        <img src={one}/>
                    </div>
                    <div class='photo-grid-item'>
                        <img src={two}/>
                    </div>
                    <div class='photo-grid-item'>
                        <img src={three}/>
                    </div>
                    <div class='photo-grid-item'>
                        <img src={four}/>
                    </div>
                    <div class='photo-grid-item last-item'>
                        <img src={require('../images/flexbox/three.svg')}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PhotoGrid;