import React, { Component } from 'react';
import '../css/UserPanel.css'

class NoWebs extends Component {

  render() {
    return (
      <tr>
        <td colSpan = "5">You do not have any pages selected for analysis</td>
      </tr>
    );
  }
}

export default NoWebs;
