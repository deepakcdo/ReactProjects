import React from 'react';
import DrawerToggleCss from './DrawerToggle.css'


const drawerToggle = (props) => {
    return (
        <div className={DrawerToggleCss.DrawerToggle} onClick={props.openSideDrawer}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );

}
export default drawerToggle;