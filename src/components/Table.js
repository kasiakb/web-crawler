import React, { Component } from 'react';
import moment from 'moment'
import '../css/UserPanel.css'

class Table extends Component {

  renderWebs(siteAnalysis) {
    if(siteAnalysis) {
      return siteAnalysis.map((web) => {
        return (
          <tr key={web.id}>
            <td>{moment(web.attributes.updatedAt).format('lll')}</td>
            <td>{web.attributes.title}</td>
            <td>{web.attributes.url}</td>
            <td>{web.attributes.status}</td>
            <td><button name={web.id} onClick={(e)=>this.props.delete(e)}>Delete</button></td>
          </tr>
        );
      })
    }else{
      return null
    }
  }

  render() {
    return (
      <div>
        <table>
            <tbody> 
              <tr>
                <th>Data</th>
                <th>Web Title</th>
                <th>Web URL</th>
                <th>Analysis Status</th>
                <th>Delate</th>
              </tr>
              {this.renderWebs(this.props.data)}
            </tbody>
          </table>
      </div>
    );
  }
}

export default Table;