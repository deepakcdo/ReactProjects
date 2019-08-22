import React from 'react';
import InputCss from './Input.css';

const input = (props) => {
    let inputElement = null;

    let cssValues = [];
    cssValues.push(InputCss.Input);

    if (props.touched && props.invalid && props.shouldValidate) {
        cssValues.push(InputCss.Invalid);
    }
    switch (props.elementType) {
        case 'input':
            inputElement = <input
                className={cssValues.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case 'textarea':
            inputElement = <textarea
                className={cssValues.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case 'select':
            inputElement = (
                <select
                    className={cssValues.join(' ')} onChange={props.changed}
                    value={props.value}>
                    {props.elementConfig.options.map((option) => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={cssValues.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }
    return(
        <div className={InputCss.Input}>
            <label className={InputCss.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;