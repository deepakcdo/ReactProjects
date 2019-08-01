import React from 'react';
import BurgerCss from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let ingredientsToAdd = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
                .map((val, indx) => {
                    return <BurgerIngredient type={ingKey} key={ingKey + '_' + indx}/>
                });
        }).reduce((previousValue, currentValue) => {
          return previousValue.concat(currentValue);
        }, []);

    console.log(ingredientsToAdd);
    let emptyBurger = false;
    if (ingredientsToAdd.length === 0) {
        ingredientsToAdd = <p>Please add some ingredients !!</p>
        emptyBurger = true;
    }


    return <div id="BurgerMain" className={BurgerCss.Burger}>
        <BurgerIngredient type={"burger-top"}/>
        {ingredientsToAdd}
        <BurgerIngredient type={"burger-bottom"}/>
        {emptyBurger === true ? <div></div>:
            <div>The Burger is looking tasty looking burger !!!!</div>
        }
    </div>
}
export default burger;