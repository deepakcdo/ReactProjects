import React from 'react';
import BuilderControlCss from './BuildControl.css'


const builderControl = (props) => {
    return (
        <div className={BuilderControlCss.BuildControl}>
            <div className={BuilderControlCss.Label}>{props.label} @ {props.price}</div>
            <button onClick={props.removed} className={BuilderControlCss.Less} disabled={props.disabled}>Less</button>
            <button  onClick={props.added} className={BuilderControlCss.More}>More</button>
        </div>
    );
}
export default builderControl;