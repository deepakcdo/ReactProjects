import React from 'react';
import ContactDataCss from './ContactData.css';
import Button from "../../../components/UI/Button/Button";
import axiosOrders from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

export default class ContactData extends React.Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            postCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Post Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                valid: true
            },
        },
        validForm: false
    }

    handleChanged = (event, inputID) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputID]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValid(event.target.value, updatedFormElement.validation);
        updatedOrderForm[inputID] = updatedFormElement;
        let validForm = true;
        for(let item in updatedOrderForm){
            validForm = updatedOrderForm[item].valid && validForm;
        }
        console.log(validForm);
        this.setState({orderForm: updatedOrderForm, validForm:validForm});
    }

    checkValid(value, checks) {
        let isValid = true;
        if (!checks){
            return true;
        }
        if (checks.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (checks.minLength) {
            isValid = value.trim().length >= checks.minLength && isValid;
        }
        if (checks.maxLength) {
            isValid = value.trim().length <= checks.maxLength && isValid;
        }
        return isValid;
    }

    handleOrderButton = (event) => {
        event.preventDefault();
        // // alert('Yes Go on !!!!')
        this.setState({loading: true});

        const formData = {};
        for (let item in this.state.orderForm) {
            formData[item] = this.state.orderForm[item].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: formData
        }

        axiosOrders.post("orders.json", order)
            .then(ok => {
                this.setState({loading: false});
                console.log(ok);
                this.props.history.push("/")
            }).catch(error => {
            this.setState({loading: false});
            console.log(error)
        });
    }

    render() {
        let formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                data: this.state.orderForm[key]
            });
        }

        let form = (<form onSubmit={this.handleOrderButton}>
            {
                formElementArray.map(item => {
                    return <Input
                        key={item.id}
                        elementType={item.data.elementType}
                        elementConfig={item.data.elementConfig}
                        value={item.data.value}
                        touched={item.data.touched}
                        invalid={!item.data.valid}
                        shouldValidate={item.data.validation}
                        changed={(event) => this.handleChanged(event, item.id)}/>
                })
            }
            <Button btnType="Success" disabled={!this.state.validForm}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner text="Placing Order!!!"/>
        }
        return (<div className={ContactDataCss.ContactData}>
                <h4>Please enter your contact details.</h4>
                {form}
            </div>
        );
    }
}