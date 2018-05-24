import React, { Component } from 'react';

class ButtonItem extends Component {
  render() {
    return (
      <button
        type={this.props.type}
        disabled={this.submitting}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default ButtonItem;
