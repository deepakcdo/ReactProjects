import * as actionTypes from '../actions/actionsTypes';
import Ingredients from '../../components/Burger/Ingredients'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
};

function getPriceForIngredient(requiredType) {
    let priceForIngredient = 100; // default value
    Ingredients.forEach(ingredient => {
        let {type, price} = ingredient;
        if (requiredType === type) {
            priceForIngredient = price;
        }
    });
    return priceForIngredient;
}

const burgerbuilder = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + getPriceForIngredient(action.ingredientName)
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - getPriceForIngredient(action.ingredientName)
            }

        case actionTypes.FETCH_INGREDIENT_FAILED:
            return {
                ...state,
                error:true,
            }
        case actionTypes.SET_INGREDIENT:
            return {
                ...state,
                //ingredients:action.ingredients,
                // so we get the ingredients in order we remap the order to the ingredients. usually it should just be the line above
                ingredients:{
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                error: false
            }

        default:
            return state;
    }
};

export default burgerbuilder;
