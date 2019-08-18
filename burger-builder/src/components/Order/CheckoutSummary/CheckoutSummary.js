import React from 'react';
import CheckoutSummaryCss from './CheckoutSummary.css'
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

export default function checkoutSummary (props)  {
    return (
        <div className={CheckoutSummaryCss.CheckOutSummary}>
            <h1 >This will be very tasty !!!!</h1>
            <div>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
                <Button btnType="Danger" clicked="">CANCEL</Button>
                <Button btnType="Success" clicked="">CONTINUE</Button>
        </div>
    );

}