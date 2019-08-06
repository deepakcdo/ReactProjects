import React from 'react';
import Auxx from '../Auxx/Auxx';
import LayoutCss from './Layout.css'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevSate) => {
            return {showSideDrawer: !prevSate.showSideDrawer}
        });
    }

    render() {
        return (<Auxx>
                <Toolbar openSideDrawer={this.sideDrawerToggleHandler}/>
                <SideDrawer showSlideDrawer = {this.state.showSideDrawer} closeSideDrawer={this.sideDrawerCloseHandler}/>
                <main className={LayoutCss.Content}>
                    {this.props.children}
                </main>
            </Auxx>
        );
    }
}

export default Layout;