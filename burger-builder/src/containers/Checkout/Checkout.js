import React from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import {connect} from "react-redux";

class Checkout extends React.Component {

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let i of query.entries()) {
    //         if (i[0] === 'price') {
    //             price = i[1];
    //         } else {
    //             ingredients[i[0]] = +i[1];
    //         }
    //     }
    //     this.setState({ingredients: ingredients, price: price});
    // }

    orderCancelled = () => {
        this.props.history.goBack();

    }

    orderContinue = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    orderCancelled={this.orderCancelled}
                    orderContinue={this.orderContinue}
                    ingredients={this.props.ings}/>
                <Route path={this.props.match.path + '/contact-data'}
                       component={ContactData}/>
                       {/*render={(props) => <ContactData {...props} ingredients={this.state.ingredients} price={this.state.price}/>}/>*/}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout)