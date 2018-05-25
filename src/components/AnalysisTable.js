import React, { Component } from 'react';
import '../css/UserPanel.css'
import AnalaysisTableItem from './AnalaysisTableItem';

class AnalaysisTable extends Component {

  renderWebs(siteAnalysis) {
    if(siteAnalysis) {
      return siteAnalysis.map((web) => {
        return (
          <AnalaysisTableItem
            key={web.id}
            web={web}
            deleteWebPage={this.props.deleteWebPage}
          />
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
              {this.renderWebs(this.props.webPageInfo)}
            </tbody>
          </table>
      </div>
    );
  }
}

export default AnalaysisTable;
