import React from 'react';
import ContactDataCss from './ContactData.css';
import Button from "../../../components/UI/Button/Button";
import axiosOrders from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

export default class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    handleOrderButton = (event) => {
        event.preventDefault();
        // // alert('Yes Go on !!!!')
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "James Bond",
                address: {
                    street: "kilburn street",
                    postalcode: "NW2 3EE"
                },
                email: "dee@dee.com"
            },
            deliveryMethod: "fastest"

        }
        axiosOrders.post("orders.json", order)
            .then(ok => {
                this.setState({loading: false});
                console.log(ok);
                this.props.history.push("/")
            }).catch(error => {
            this.setState({loading: false});
            console.log(error)
        });
    }

    render() {
        let form = (<form>
            <input className={ContactDataCss.Input} type="text" name="name" placeholder="Your Name"/>
            <input className={ContactDataCss.Input} type="email" name="email" placeholder="Your Email"/>
            <input className={ContactDataCss.Input} type="text" name="street" placeholder="Street Name"/>
            <input className={ContactDataCss.Input} type="text" name="postalCode" placeholder="Postal Code"/>
            <Button btnType="Success" clicked={this.handleOrderButton}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner text="Placing Order!!!"/>
        }
        return (<div className={ContactDataCss.ContactData}>
                <h4>Please enter your contact details.</h4>
                {form}
            </div>
        );
    }
}