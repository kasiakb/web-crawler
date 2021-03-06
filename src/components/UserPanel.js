import React, { Component } from 'react';
import AddWebInputs from './AddWebInputs';
import AnalysisTable from './AnalysisTable';

class UserPanel extends Component {
  constructor(props) {
    super(props);

    this.addWebPage = this.addWebPage.bind(this)
    this.deleteWebPage = this.deleteWebPage.bind(this)
    this.state = {
      siteAnalysis: []
    }
  }

  randomData(response) {
    const newData = [response.data, this.state.siteAnalysis]
    const randomData = newData[Math.floor(Math.random() * newData.length)]
    return randomData
  }

  componentWillMount() {
    fetch('http://localhost:8000/siteAnalyses', {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(response => this.setState({siteAnalysis: this.randomData(response)}))
    .catch(error => console.error('Error:', error))
  }

  addWebPage(newWeb) {
    fetch('http://localhost:8000/siteAnalyses', {
      body: newWeb,
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
  }

  deleteWebPage(e) {
    e.preventDefault();
    const id = +e.target.name
    if (window.confirm("Are you sure you want to delete this page?")) {
      fetch(`http://localhost:8000/siteAnalyses/${id}`, {
        method: 'DELETE',
        mode: 'cors',
      })
      .then(response => {
        if(response.status === 204) {
          this.setState({
            siteAnalysis: this.state.siteAnalysis.filter((web) => web.id !== id)
          });
        }
        else{
          window.alert("You can't delete this page.")
        }
      })
      .catch(error => console.error(error))
    }
  }

  render() {
    return (
      <div>
        <AddWebInputs add={this.addWebPage}/>
        <AnalysisTable
          deleteWebPage={this.deleteWebPage}
          webPageInfo={this.state.siteAnalysis}
        />
      </div>
    );
  }
}

export default UserPanel;
