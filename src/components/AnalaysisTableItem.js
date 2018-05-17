import React, { Component } from 'react';
import moment from 'moment'
import '../css/UserPanel.css'

class AnalaysisTableItem extends Component {

  render() {
    return (
       <tr key={this.props.web.id}>
        <td>{moment(this.props.web.attributes.updatedAt).format('lll')}</td>
        <td>{this.props.web.attributes.title}</td>
        <td>{this.props.web.attributes.url}</td>
        <td>{this.props.web.attributes.status}</td>
        <td>
          <button 
            name={this.props.web.id}
            onClick={(e)=>this.props.deleteWebPage(e)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default AnalaysisTableItem;
