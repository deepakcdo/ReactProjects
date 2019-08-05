import React from 'react';
import ToolbarCss from './Toolbar.css'

const toolbar = (props) => {
    return (
        <header className={ToolbarCss.Toolbar}>
            <div>Menu</div>
            <div>Logo</div>
            <nav>...</nav>
        </header>
    );

}
export default toolbar;