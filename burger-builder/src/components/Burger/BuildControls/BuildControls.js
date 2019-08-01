import React from 'react';
import BuilderControlsCss from './BuildControls.css'
import BuilderControl from './BuilderControl/BuildControl'
import controls from '../Ingredients'

const builderControls = (props) => {

    return (<div className={BuilderControlsCss.BuildControls}>
        <div className={BuilderControlsCss.Price}>Total price £ {props.price.toFixed(2)} Only !!!!</div>
        {controls.map((item, indx) => (
            <BuilderControl label={item.label}
                            key={item.label + '_' + indx}
                            price={item.price}
                            added={() => props.ingredientsAdded(item.type)}
                            removed={() => props.ingredidentsRemoved(item.type)}
                            disabled={props.disabled[item.type]}/>
        ))}
        <button className={BuilderControlsCss.OrderButton}
                onClick={props.purchaseHandler}
                disabled={!props.purchasable}>ORDER NOW</button>
    </div>)
}
export default builderControls;