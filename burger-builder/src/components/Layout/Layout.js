import React from 'react';
import Auxx from '../../hoc/Auxx';
import LayoutCss from './Layout.css'

const layout = (props) => (
    <Auxx>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className={LayoutCss.Content}>
            {props.children}
        </main>
    </Auxx>
);

export default layout;