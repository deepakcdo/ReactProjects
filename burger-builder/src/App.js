import React from 'react';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from 'react-router-dom';
import Orders from "./containers/Orders";

class App extends React.Component {

    state = {
        showBurgerBuilder: true
    }

    // remove the burgerBuilder after 5 sec
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({showBurgerBuilder: false})
    //     }, 5000);
    // }
    //() => this.state.showBurgerBuilder ? <BurgerBuilder/> : null
    render() {
        return <div>
            <Layout>
                <Switch>
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/orders' component={Orders}/>
                    <Route path='/' component={BurgerBuilder}/>
                </Switch>
            </Layout>

        </div>
    }
}

export default App;
