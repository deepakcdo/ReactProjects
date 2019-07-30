import React from 'react';
import BuilderControlsCss from './BuildControls.css'
import BuilderControl from './BuilderControl/BuildControl'
import controls from '../Ingredients'

const builderControls = (props) => {

    return (<div className={BuilderControlsCss.BuildControls}>
        {controls.map((item, indx) => (
            <BuilderControl label={item.label}
                            key={item.label + '_' + indx}
                            added={() => props.ingredientsAdded(item.type)}/>
        ))}
    </div>)
}
export default builderControls;