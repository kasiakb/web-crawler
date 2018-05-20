import React, { Component } from 'react';
import { Form} from 'react-final-form';
import {
  onSubmit,
  registerValidation
} from './InputValidationConst'
import ButtonItem from './ButtonItem';
import IntputItem from './IntputItem';

class RegisterInputs extends Component {

  onSubmit = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    })
  }

  myForm() {
    return (
    <div>
      <h1>Create a new account</h1>
      <Form
        onSubmit={onSubmit}
        validate={registerValidation}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form
            onSubmit={handleSubmit}
            >
            <IntputItem
              name={"email"}
              type={"email"}
              placeholder={"E-mail"}
            />
             <IntputItem
              name={"password"}
              type={"password"}
              placeholder={"Password"}
              condition={"Must contain at least one number and one uppercase and lowercase letter and, at least 8 or more characters"}
            />
             <IntputItem
              name={"confirm"}
              type={"password"}
              placeholder={"Confirm password"}
            />
            <div className="buttons">
              <ButtonItem
                text={"Create"}
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

export default RegisterInputs
