import React from 'react';
import NavigationItemCss from './NavigationItem.css';
import {NavLink} from "react-router-dom";

const navigationItem = (props) => (
    <li className={NavigationItemCss.NavigationItem}>
        <NavLink to={props.link}
                 exact={props.exact}
            activeClassName={NavigationItemCss.active}> {props.children}
        </NavLink>
    </li>
);

export default navigationItem;