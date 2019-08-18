import React from 'react';
import LogoCss from './Logo.css';
import BurgerLogo from '../../assets/burgerLogo.png';
import {withRouter} from 'react-router-dom';

const logo = (props) => {
    function clicked(){
        props.history.push('/')
    }

    return (<div className={LogoCss.Logo} style={{height: props.height}}>
            <img src={BurgerLogo} alt="Burger Logo" onClick={clicked}/>
        </div>
    );
}

export default withRouter(logo);