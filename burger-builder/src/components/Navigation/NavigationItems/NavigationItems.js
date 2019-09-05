import React from 'react';
import NavigationItemsCss from './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <div className={NavigationItemsCss.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {/*This deviates from course as I wanted to add tests*/}
        {!props.isAuthenticated ?  <NavigationItem link="/orders" >Orders </NavigationItem>: null}
          {props.isAuthenticated ?  <NavigationItem link="/logout" >Orders </NavigationItem>: null}
          {props.isAuthenticated ?  <NavigationItem link="/Sign" >Orders </NavigationItem>: null}

    </div>
);

export default navigationItems;