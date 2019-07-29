import React from 'react';
import Auxx from '../../hoc/Auxx';


const layout = (props) => (
    <Auxx>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main>
            {props.children}
        </main>
    </Auxx>
);

export default layout;