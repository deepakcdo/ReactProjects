import * as actionTypes from '../actions/actionsTypes'

const initState = {
    orders: [],
    loading: false,
    purchased:false
}

const reducers = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SCUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                purchased:true,
                orders: state.orders.concat(newOrder)

            }
        case actionTypes.PURCHASE_BURGER_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.PURCHASE_BURGER_START:
            return {
            ...state,
            loading: true,
        }
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false,
            }
        default:
            return state
    }
}
export default reducers;