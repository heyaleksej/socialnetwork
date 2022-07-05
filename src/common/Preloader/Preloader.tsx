import React from 'react';
import loader from '../../common/img/Loading_icon.gif'

export const Preloader = () => {
    return (
        <div>
            <img src={loader} alt={'preloader'}/>
        </div>
    );
};