import React from 'react';
import NavigationItemsCss from './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <div className={NavigationItemsCss.NavigationItems}>
        <NavigationItem link="/" active="true">Burger Builder</NavigationItem>
        <NavigationItem link="/" >Checkout </NavigationItem>
    </div>
);

export default navigationItems;