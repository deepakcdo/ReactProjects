import React from 'react';
import Auxx from "../../../hoc/Auxx";
import Button from "../../UI/Button/Button";


const orderSummary = (props) => {

    let map = Object.keys(props.ingredients).map(key => {
        let count = props.ingredients[key];
        if (count > 0) {
            return <li key={key}><span style={{textTransform: 'capitalize'}}>{key} </span>: {props.ingredients[key]}</li>
        }

    });

    return (
        <Auxx>
            <h3> Order Summary</h3>
            <p> You have ordered a delicious burger with :</p>
            <ul>
                {map}
            </ul>
            <p><strong>Total Price £ {props.price.toFixed(2)}</strong></p>
            <p> Continue to checkout?</p>
            <Button clicked={props.cancelPurchase} btnType="Danger">Cancel</Button>
            <Button clicked={props.continuePurchase} btnType="Success">Order</Button>
        </Auxx>
    );
}
export default orderSummary;