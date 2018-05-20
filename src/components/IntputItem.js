import React, { Component } from 'react';
import { Field } from 'react-final-form';

class IntputItem extends Component {
  render() {
    return (
      <Field name={this.props.name} validate={this.props.validate}>
        {({ input, meta }) => (
          <div>
            <input {...input} type={this.props.type} placeholder={this.props.placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
            <p>{this.props.condition}</p>
          </div>
        )}
      </Field>
    );
  }
}

export default IntputItem;
