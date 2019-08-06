import React from 'react';
import NavigationItemCss from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={NavigationItemCss.NavigationItem}>
        <a href={props.link}
            className={props.active ? NavigationItemCss.active:  null}> {props.children}
        </a>
    </li>
);

export default navigationItem;