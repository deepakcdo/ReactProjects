import * as actionTypes from './actions';
import Ingredients from '../components/Burger/Ingredients'

const initialState = {
    ingredients: {
        salad:0,
        cheese:0,
        meat:0,
        bacon:0
    },
    totalPrice: 4
};

function getPriceForIngredient (requiredType) {
    let priceForIngredient = 100; // default value
    Ingredients.forEach(ingredient => {
        let {type, price} = ingredient;
        if (requiredType === type) {
            priceForIngredient = price;
        }
    });
    return priceForIngredient;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName] :state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + getPriceForIngredient(action.ingredientName)
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName] :state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - getPriceForIngredient(action.ingredientName)
            }
        default:
            return state;
    }
};

export default reducer;
