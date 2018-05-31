import React, { Component } from 'react';
import { Form} from 'react-final-form';
import {
  onSubmit,
  signValidation
} from './InputValidationConst'
import ButtonItem from './ButtonItem';
import IntputItem from './IntputItem';

class SignInInputs extends Component {

  onSubmit = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    })
  }

  myForm() {
    return (
    <div>
      <h1>Sign in</h1>
      <Form
        onSubmit={onSubmit}
        validate={signValidation}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form
          onSubmit={event =>{
            let promise = handleSubmit(event);
            if(promise){
              promise.then(() => {
                this.props.loginData(JSON.stringify(values, 0, 2))
              })
              promise.then(() => {
                reset();
              })
              return promise;
            }}
          }
          >
            <IntputItem
              name={"email"}
              type={"text"}
              placeholder={"E-mail"}
            />
             <IntputItem
              name={"password"}
              type={"password"}
              placeholder={"Password"}
            />
            <div className="buttons">
              <ButtonItem
                text={"Sign in"}
              />
            </div>
          </form>
        )
      }
      />
    </div>
    )
  }

  render() {
    return (
      <div>
        {this.myForm()}
      </div>
    )
  }
}

export default SignInInputs
