import React from 'react';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Checkout} from "./containers/Checkout/Checkout";
import {Route, Switch} from 'react-router-dom';

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
    render() {
        return <div>
            <Layout>
                <Switch>
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/' component={() => this.state.showBurgerBuilder ? <BurgerBuilder/> : null}/>
                </Switch>
            </Layout>

        </div>
    }
}

export default App;
