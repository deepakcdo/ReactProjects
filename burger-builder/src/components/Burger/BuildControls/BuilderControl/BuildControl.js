import React from 'react';
import BuilderControlCss from './BuildControl.css'


const builderControl = (props) => {
    return (
        <div className={BuilderControlCss.BuildControl}>
            <div className={BuilderControlCss.Label}>{props.label}</div>
            <button className={BuilderControlCss.Less}>Less</button>
            <button  onClick={props.added} className={BuilderControlCss.More}>More</button>
        </div>
    );
}
export default builderControl;