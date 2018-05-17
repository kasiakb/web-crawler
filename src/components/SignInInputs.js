import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
// import {
//   required,
//   notTooLong,
//   properUrl,
//   composeValidators
// } from './InputValidationConst'
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
        onSubmit={this.onSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form
            onSubmit={event =>{
              let promise = handleSubmit(event);
              if(promise){
                promise.then(() => {
                  this.props.add(JSON.stringify(values, 0, 2))
                })
                promise.then(() => {
                  reset();
                })
                return promise;
              }}
              }
            >
            <IntputItem/>     
            <div className="buttons">
              <ButtonItem/>
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
