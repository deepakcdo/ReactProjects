import React from 'react';
import SpinnerCss from './Spinner.css'

const spinner = (props) => {
    return (
        <div>
        <div className={SpinnerCss.Loader} />
            <div><center>{props.text}</center></div>
        </div>
    );

}
export default spinner;