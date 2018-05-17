import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import {
  required,
  notTooLong,
  composeValidators
} from './InputValidationConst'

class IntputItem extends Component {
  render() {
    return (
      <Field name="userName" validate={composeValidators(required, notTooLong)}>
        {({ input, meta }) => (
          <div>
            <input {...input} type="text" placeholder="User name" />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    );
  }
}

export default IntputItem;