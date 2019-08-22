import React from 'react';
import ButtonCss from './Button.css'

const button = (props) => {
    return (
        <button className={[ButtonCss.Button, ButtonCss[props.btnType]].join(' ')}
                disabled={props.disabled} onClick={props.clicked}>{props.children}</button>
    );

}
export default button;