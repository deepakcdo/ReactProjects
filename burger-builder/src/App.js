import React from 'react';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

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
                {this.state.showBurgerBuilder ? <BurgerBuilder/> : null}
            </Layout>
        </div>
    }
}

export default App;
