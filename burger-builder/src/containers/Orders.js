import React from 'react';
import Order from "../components/Order/Order";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import axios from "../axios-orders";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import Spinner from "../components/UI/Spinner/Spinner";

class Orders extends React.Component {

    componentDidMount() {
        this.props.onFetchOrder();
    }

    render() {
        let order = <Spinner/>;
        if (!this.props.loading) {
            order = (this.props.orders.map(order => (
                <Order key={order.id} id={order.id} ingredients={order.ingredients} price={order.price}
                       name={order.customer.name}/>
            )));
        }
        return (
            <div>
                {order }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrder: () => dispatch(actions.fetchOrders())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));