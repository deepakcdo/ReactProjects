import React from 'react';
import ToolbarCss from './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
    return (
        <header className={ToolbarCss.Toolbar}>
            <DrawerToggle openSideDrawer={props.openSideDrawer}/>
            <div className={ToolbarCss.Logo}><Logo /></div>
            <nav className={ToolbarCss.Desktop}><NavigationItems /></nav>
        </header>
    );

}
export default toolbar;