import React from 'react';
import './Preloader.css';

export const Preloader = () => {

    return (
        <div className='loader-wrap'>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

