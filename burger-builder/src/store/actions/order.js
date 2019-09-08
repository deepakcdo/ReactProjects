import * as actionTypes from './actionsTypes';
import axiosOrders from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SCUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
}

export const purchaesBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    }
}
export const purchaesInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT,
    }
}

export const purchaesBurger = (orderData) => {
    return dispatc => {
        dispatc(purchaesBurgerStart());
        axiosOrders.post("orders.json", orderData)
            .then(ok => {
                dispatc(purchaseBurgerSuccess(ok.data.name, orderData))
            }).catch(error => {
            dispatc(purchaseBurgerFail());

        });

    }
}

export const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrderFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrderStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    }
}


export const fetchOrders = () => {
    return dispatc => {
        dispatc(fetchOrderStart());
        axiosOrders.get("orders.json").then(rex => {
            let fectedOrder = [];
            for (let key in rex.data) {
                fectedOrder.push({
                    id: key,
                    ...rex.data[key]
                })
            }
            dispatc(fetchOrderSuccess(fectedOrder));
        }).catch(err => {
            dispatc(fetchOrderFail(err));
        });
    }
}
