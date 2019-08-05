import React from 'react';
import Auxx from '../../hoc/Auxx';
import LayoutCss from './Layout.css'
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";

const layout = (props) => (
    <Auxx>
      <Toolbar />
        <main className={LayoutCss.Content}>
            {props.children}
        </main>
    </Auxx>
);

export default layout;