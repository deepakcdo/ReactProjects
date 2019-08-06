import React from 'react';
import LogoCss from './Logo.css';
import BurgerLogo from '../../assets/burgerLogo.png';

const logo = (props) => (
        <div className={LogoCss.Logo} style={{height: props.height}}>
            <img src={BurgerLogo} alt="Burger Logo"/>
        </div>
);

export default logo;