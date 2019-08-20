import React from 'react';
import Order from "../components/Order/Order";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import axios from "../axios-orders";

class Orders extends React.Component {

    state = {
        orders: [],
        loading: false
    }

    componentDidMount() {
        axios.get("orders.json").then(rex => {
            let fectedOrder = [];
            for (let key in rex.data) {
                fectedOrder.push({
                    id: key,
                    ...rex.data[key]
                })
            }
            this.setState({loading: false, orders: fectedOrder});
        }).catch(err => {
            this.setState({loading: false});
        });
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id} id={order.id} ingredients={order.ingredients} price={order.price} name={order.customer.name}/>
                ))
                }
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);