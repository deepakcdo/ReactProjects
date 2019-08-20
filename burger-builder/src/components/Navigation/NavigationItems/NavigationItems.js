import React from 'react';
import NavigationItemsCss from './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <div className={NavigationItemsCss.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders" >Orders </NavigationItem>
    </div>
);

export default navigationItems;