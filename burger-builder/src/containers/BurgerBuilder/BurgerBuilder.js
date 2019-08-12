import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx/Auxx';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Ingredients from '../../components/Burger/Ingredients'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axiosOrders from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4.00,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        const incrementPrice = this.getPriceForIngredient(type);
        const newPrice = this.state.totalPrice + incrementPrice;
        this.setState({totalPrice: newPrice, ingredients: newIngredients});
        this.updatePurchasable(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount === 0) {
            return;
        }
        const newCount = oldCount - 1;
        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        const decrementPrice = this.getPriceForIngredient(type);
        const newPrice = this.state.totalPrice - decrementPrice;
        this.setState({totalPrice: newPrice, ingredients: newIngredients});
        this.updatePurchasable(newIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
    }

    continuePurchaseHandler = () => {
        // alert('Yes Go on !!!!')
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Deepak D",
                address: {
                    street: "kilburn street",
                    postcode: "NW2 3EE"
                },
                email: "dee@dee.com"
            },
            deliveryMethod: "fastest"

        }
        axiosOrders.post("orders.json", order)
            .then(ok => {
                this.setState({loading: false, purchasing: false});
            console.log(ok);
        }).catch(error => {
            this.setState({loading: false, purchasing: false});
            console.log(error)
        });
    }

    updatePurchasable(allIngredients) {
        let sum = Object.keys(allIngredients).map(key => {
            return allIngredients[key];
        }).reduce((coll, it) => {
            return coll + it;
        }, 0);
        this.setState({purchasable: sum > 0});
    }

    getPriceForIngredient = (requiredType) => {
        let priceForIngredient = 100; // default value
        Ingredients.forEach(ingredient => {
            let {type, price} = ingredient;
            if (requiredType === type) {
                priceForIngredient = price;
            }
        });
        return priceForIngredient;
    }

    render() {
        let disabledInfo = {...this.state.ingredients};
        for (var item in disabledInfo) {
            disabledInfo[item] = disabledInfo[item] <= 0;
        }
        let orderSummary = <OrderSummary
            price={this.state.totalPrice}
            cancelPurchase={this.cancelPurchaseHandler}
            continuePurchase={this.continuePurchaseHandler}
            ingredients={this.state.ingredients}/>;
        if (this.state.loading){
            orderSummary = <Spinner />;
        }
        return <Auxx>
            <Modal show={this.state.purchasing} clicked={this.cancelPurchaseHandler}>
                {orderSummary}
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <BurgerControls
                price={this.state.totalPrice}
                ingredientsAdded={this.addIngredientHandler}
                ingredidentsRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                purchaseHandler={this.purchaseHandler}/>
        </Auxx>;
    };
}

export default BurgerBuilder;