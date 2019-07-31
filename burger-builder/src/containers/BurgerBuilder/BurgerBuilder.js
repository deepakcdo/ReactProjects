import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

import Ingredients from '../../components/Burger/Ingredients'

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad:1,
            cheese:1,
            bacon:1,
            meat: 1
        },
        totalPrice:4
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        const incrementPrice = .50
        const newPrice = this.state.totalPrice + incrementPrice;
         this.setState({totalPrice:newPrice, ingredients: newIngredients});
    }

    removeIngredientHandler = (type) => {

    }
    render () {
       return <Auxx>
           <Burger ingredients={this.state.ingredients}/>
           <BurgerControls
               ingredientsAdded = {this.addIngredientHandler}/>
       </Auxx>;
    };
}

export default BurgerBuilder;