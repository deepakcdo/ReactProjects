import React from 'react';
import OrderCss from './Order.css'

const order = (props) => {
    let printIng = [];
    for (let ing in props.ingredients){
        printIng.push({
            name:ing,
            amount:props.ingredients[ing]
        })
    }
    let ingredientsOutput = printIng.map(ig =>{
       return <span style={{
           textTransform: 'capitalize',
           display: 'inline-block',
           margin: '0 5px',
           border: '1px solid #ccc',
           padding:'3px'
       }} key={ig.name}> { ig.name + " " + ig.amount}</span>
    });

    return (
        <div className={OrderCss.Order}>
            <p>OrderID : {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price : £ {Number.parseFloat(props.price).toFixed(2)} </p>
        </div>
    );

}
export default order;