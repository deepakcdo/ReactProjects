import React from 'react';
import BuilderControlsCss from './BuildControls.css'
import BuilderControl from './BuilderControl/BuildControl'
import controls from '../Ingredients'

const builderControls = (props) => {

    return (<div className={BuilderControlsCss.BuildControls}>
        {controls.map((item, indx) => (
            <BuilderControl label={item.label}
                            key={item.label + '_' + indx}
                            price={item.price}
                            added={() => props.ingredientsAdded(item.type)}
                            removed={() => props.ingredidentsRemoved(item.type)}
                            disabled={props.disabled[item.type]}/>
        ))}
    </div>)
}
export default builderControls;