import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx/Auxx';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axiosOrders from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/actions";
import {connect} from "react-redux";

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // axiosOrders.get("https://react-my-burger-12345678.firebaseio.com/ingredients.json")
        //     .then(res => {
        //         this.setState({ingredients: res.data});
        //     }).catch(err => {
        //     this.setState({error: true});
        // })

    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const newCount = oldCount + 1;
    //     const newIngredients = {...this.state.ingredients};
    //     newIngredients[type] = newCount;
    //     const incrementPrice = this.getPriceForIngredient(type);
    //     const newPrice = this.state.totalPrice + incrementPrice;
    //     this.setState({totalPrice: newPrice, ingredients: newIngredients});
    //     this.updatePurchasable(newIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount === 0) {
    //         return;
    //     }
    //     const newCount = oldCount - 1;
    //     const newIngredients = {...this.state.ingredients};
    //     newIngredients[type] = newCount;
    //     const decrementPrice = this.getPriceForIngredient(type);
    //     const newPrice = this.state.totalPrice - decrementPrice;
    //     this.setState({totalPrice: newPrice, ingredients: newIngredients});
    //     this.updatePurchasable(newIngredients);
    // }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
    }

    continuePurchaseHandler = () => {
        this.props.history.push('/checkout');

        // const queryParams = [];
        // for ( let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push('price=' + this.state.totalPrice);
        // const queryString= queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });
    }

    updatePurchasable(allIngredients) {
        let sum = Object.keys(allIngredients).map(key => {
            return allIngredients[key];
        }).reduce((coll, it) => {
            return coll + it;
        }, 0);
        return  sum > 0;
    }

    // getPriceForIngredient = (requiredType) => {
    //     let priceForIngredient = 100; // default value
    //     Ingredients.forEach(ingredient => {
    //         let {type, price} = ingredient;
    //         if (requiredType === type) {
    //             priceForIngredient = price;
    //         }
    //     });
    //     return priceForIngredient;
    // }

    render() {
        let disabledInfo = {...this.props.ings};
        for (var item in disabledInfo) {
            disabledInfo[item] = disabledInfo[item] <= 0;
        }

        let orderSummary = '';
        let aburger = this.state.error ? <p>Cant get ingredients from the server</p>
            : <Spinner text="Getting ingredients from server"/>;
        if (this.props.ings) {
            aburger = <Auxx>
                <Burger ingredients={this.props.ings}/>
                <BurgerControls
                    price={this.props.price}
                    ingredientsAdded={this.props.onIngredientsAdded}
                    ingredidentsRemoved={this.props.onIngredientsRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchasable(this.props.ings)}
                    purchaseHandler={this.purchaseHandler}/>
            </Auxx>

            orderSummary = <OrderSummary
                price={this.props.price}
                cancelPurchase={this.cancelPurchaseHandler}
                continuePurchase={this.continuePurchaseHandler}
                ingredients={this.props.ings}/>;
        }

        if (this.state.loading) {
            orderSummary = <Spinner text="Placing order !!!!"/>;
        }

        return <Auxx>
            <Modal show={this.state.purchasing} clicked={this.cancelPurchaseHandler}>
                {orderSummary}
            </Modal>
            {aburger}
        </Auxx>;
    };
}

const mapStateToProps = state =>{
    return{
        ings: state.ingredients,
        price: state.totalPrice
    };
}
const mapDispatchToProps = dispatch =>{
    return{
        onIngredientsAdded: (ingType) => dispatch({type:actionTypes.ADD_INGREDIENT, ingredientName: ingType}),
        onIngredientsRemoved: (ingType) => dispatch({type:actionTypes.REMOVE_INGREDIENT, ingredientName: ingType})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosOrders));