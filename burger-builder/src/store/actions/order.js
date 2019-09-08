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