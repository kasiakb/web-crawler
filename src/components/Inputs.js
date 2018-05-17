import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import {
  required,
  notTooLong,
  properUrl,
  composeValidators
} from './InputValidationConst'

class Inputs extends Component {

  onSubmit = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    })
  }

  myForm() {
    return (
    <div>
      <h1>Choose web page to crawl</h1>
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
            <Field name="title" validate={composeValidators(required, notTooLong)}>
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Web page title" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="url" validate={composeValidators(required, properUrl)}>
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Web page url" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button
              type="submit"
              disabled={submitting}
              >
                Analyse
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
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

export default Inputs
