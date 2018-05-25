import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import ButtonItem from './ButtonItem';
import IntputItem from './IntputItem';
import { addWebValidation } from './InputValidationConst'

class AddWebInputs extends Component {

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
        validate={addWebValidation}
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
              }
            }}
          >           
            <IntputItem
              name={"title"}
              type={"text"}
              placeholder={"Web page title"}
            />
            <IntputItem
              name={"url"}
              type={"text"}
              placeholder={"Web page url"}
            />
            <div className="buttons">
              <ButtonItem
                text={"Analyse"}
                type={"submit"}
                disabled={submitting}
              />
              <ButtonItem
                text={"Reset"}
                type={"button"}
                disabled={submitting || pristine}
                onClick={reset}
              />
            </div>
          </form>
        )}
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

export default AddWebInputs
