import React, { Component } from 'react';

class ButtonItem extends Component {
  render() {
    return (
      <button
        type="submit"
        disabled={this.submitting}
      >
        {this.props.text}
      </button>
    );
  }
}

export default ButtonItem;
