import React from 'react';
import ModalCss from './Modal.css'
import Auxx from "../../../hoc/Auxx";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {


    return (
        <Auxx>
            <Backdrop show={props.show} clicked={props.clicked}/>
        <div className={ModalCss.Modal}
        style={{
            transform: props.show ? 'translateY(0)': 'translateY(100vh)',
            opacity: props.show ? '1':'0'
        }}>
            {props.children}
        </div>
        </Auxx>
    );

}
export default modal;