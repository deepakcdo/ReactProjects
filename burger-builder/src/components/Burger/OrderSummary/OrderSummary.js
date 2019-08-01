import React from 'react';
import Auxx from "../../../hoc/Auxx";


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
        </Auxx>

    );


}
export default orderSummary;