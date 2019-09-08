import * as actionTypes from './actionsTypes';
import axiosOrders from "../../axios-orders";

export const addIngredients = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName
    };

};

export const removeIngredients = (ingName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
    };

};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    };
};

export const initIngredients = () => {
    return dispatch => {
        axiosOrders.get("https://react-my-burger-12345678.firebaseio.com/ingredients.json")
            .then(res => {
                dispatch(setIngredients(res.data));
            }).catch(err => {
            dispatch(fetchIngredientsFailed());
        })
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED,
    };
};