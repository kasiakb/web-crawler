import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';


class ButtonItem extends Component {
  render() {
    return (
      <button
        type="submit"
        disabled={this.submitting}
      >
        Sign in
      </button>
    );
  }
}

export default ButtonItem;