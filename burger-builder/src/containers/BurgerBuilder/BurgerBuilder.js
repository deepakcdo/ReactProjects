import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad:0,
            cheese:0,
            meat: 0
        }
    }
    render () {
       return <Auxx>
           <Burger ingredients={this.state.ingredients}/>
           <BurgerControls ingredients={this.state.ingredients}/>
       </Auxx>;
    };
}

export default BurgerBuilder;