import React from 'react';
import BuilderControlsCss from './BuildControls.css'
import BuilderControl from './BuilderControl/BuildControl'
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
]

const builderControls = (props) => {

    return (<div className={BuilderControlsCss.BuildControls}>
        {controls.map((item, indx) => (
            <BuilderControl label={item.label} key={item.label + '_' + indx}/>
        ))}
    </div>)
}
export default builderControls;