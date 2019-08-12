import React from 'react';
import ModalCss from './Modal.css'
import Auxx from "../../../hoc/Auxx/Auxx";
import Backdrop from "../Backdrop/Backdrop";

class Modal  extends React.Component {

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Modal] componentWillUpdate')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return <Auxx>
            <Backdrop show={this.props.show} clicked={this.props.clicked}/>
            <div className={ModalCss.Modal}
                 style={{
                     transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity: this.props.show ? '1' : '0'
                 }}>
                {this.props.children}
            </div>
        </Auxx>
    }

}
export default Modal;