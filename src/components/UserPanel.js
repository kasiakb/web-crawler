import React, { Component } from 'react';
import moment from 'moment'
import '../css/UserPanel.css'

class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      urlInput: '',
    }
  }

  componentWillMount() {
    fetch('http://localhost:8000/siteAnalyses', {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(response => this.setState({siteAnalysis: response.data}))
    .catch(error => console.error('Error:', error))
  }

  titleChange(e) {
    this.setState({ titleInput: e.target.value });
  }
  urlChange(e) {
    this.setState({ urlInput: e.target.value });
  }

  addWebPage(e) {
    e.preventDefault();
    const newWeb = {
      title: this.state.titleInput,
      url: this.state.urlInput,
    };
    fetch('http://localhost:8000/siteAnalyses', {
      body: JSON.stringify(newWeb),
      method: 'POST',
      mode: 'cors',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => this.setState({siteAnalysis: this.state.siteAnalysis.concat(response.data)}))
    .catch(error => console.error('Error:', error))
    this.setState({
      titleInput: '',
      urlInput: ''
    });
  }

  renderWebs() {
    if(this.state.siteAnalysis) {
      return this.state.siteAnalysis.map((web) => {
        return (
          <tr key={web.id}>
            <td>{moment(web.attributes.updatedAt).format('lll')}</td>
            <td>{web.attributes.title}</td>
            <td>{web.attributes.url}</td>
            <td>{web.attributes.status}</td>
            <td><button>Delate</button></td>
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
        <form>
          <h1>Choose web page to crawl</h1>
          <input
            type = "text"
            id="title"
            placeholder="web page title"
            value={this.state.titleInput}
            onChange={(e) => this.titleChange(e)}
          />
          <input
            type = "text"
            id="url"
            placeholder="web page url"
            value={this.state.urlInput}
            onChange={(e) => this.urlChange(e)}
          />
          <button onClick={(e)=>this.addWebPage(e)}>Analyse</button>
          <table>
            <tbody> 
              <tr>
                <th>Data</th>
                <th>Web Title</th>
                <th>Web URL</th>
                <th>Analysis Status</th>
                <th>Delate</th>
              </tr>
              {this.renderWebs()}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default UserPanel;
