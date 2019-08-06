import React from 'react';
import SideDrawerCss from './SideDrawer.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Auxx from "../../../hoc/Auxx/Auxx";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
    let attachedClass = [SideDrawerCss.SideDrawer];
    if (props.showSlideDrawer){
        attachedClass.push(SideDrawerCss.Open);
    }else{
        attachedClass.push(SideDrawerCss.Close);
    }

    return (<Auxx>
            <Backdrop show={props.showSlideDrawer} clicked={props.closeSideDrawer}/>
            <div className={attachedClass.join(' ')}>
                <div className={SideDrawerCss.Logo}><Logo/></div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxx>
    );
}

export default sideDrawer;