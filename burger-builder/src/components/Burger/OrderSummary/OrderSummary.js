import React from 'react';
import Auxx from "../../../hoc/Auxx/Auxx";
import Button from "../../UI/Button/Button";


class OrderSummary extends React.Component {

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[OrderSummary] componentWillUpdate')
    }

    render() {

        let map = Object.keys(this.props.ingredients).map(key => {
            let count = this.props.ingredients[key];
            if (count > 0) {
                return <li key={key}><span style={{textTransform: 'capitalize'}}>{key} </span>: {this.props.ingredients[key]}
                </li>
            }
            return null;
        });

        function both(fun1, fun2) {
            fun1();
            fun2();
        }

        return (

            <Auxx>
                <h3> Order Summary</h3>
                <p> You have ordered a delicious burger with :</p>
                <ul>
                    {map}
                </ul>
                <p><strong>Total Price £ {this.props.price.toFixed(2)}</strong></p>
                <p> Continue to checkout?</p>
                <Button clicked={this.props.cancelPurchase} btnType="Danger">Cancel</Button>
                <Button clicked={() => both(this.props.cancelPurchase, this.props.continuePurchase)}
                        btnType="Success">Order</Button>
            </Auxx>
        );
    }
}

export default OrderSummary;