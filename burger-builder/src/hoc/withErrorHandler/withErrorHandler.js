import React, {Component} from 'react';
import Auxx from "../Auxx/Auxx";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axiosOrders) => {
    return class extends Component {
        state = {
            error: null
        };

        componentWillMount() {
            this.request = axiosOrders.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });
            this.response = axiosOrders.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }
         componentWillUnmount() {
            console.log("Un Mounting");
            axiosOrders.interceptors.request.eject(this.request);
            axiosOrders.interceptors.response.eject(this.response);

         }

        handlerError = () => {
            this.setState({error: null});
        }

        render() {
            return <Auxx>
                <Modal show={this.state.error}
                       clicked={this.handlerError}>
                    {this.state.error ? ' Unable to process request. ' + this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Auxx>
        }
    }
}
export default withErrorHandler;