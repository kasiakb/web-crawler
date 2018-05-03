import React, { Component } from 'react';
import shortid from 'shortid';

class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      urlInput: '',
      webs: []
    }
  }

  titleChange(e) {
    this.setState({ titleInput: e.target.value });
  }
  urlChange(e) {
    this.setState({ urlInput: e.target.value });
  }

  addWebPage(e) {
    e.preventDefault();
    const title = document.getElementById("title")
    const url = document.getElementById("url")
    const newWeb = [{
      title: title.value,
      url: url.value,
      status: "pending"
    }];
    this.setState({
      webs: this.state.webs.concat(newWeb),
      titleInput: '',
      urlInput: ''
    });
  }

  renderWebs() {
    return this.state.webs.map((web) => {
      return (
        <li key={web.url}>
          <p>{web.title}</p>
          <p>{web.url}</p>
          <p>{web.status}</p>
          <button>Delate</button>
        </li>
      );
    });
  }

  render() {
    console.log(this.state)
    return (
      <form>
        <h1>Choose web page to crawl</h1>
        <input type = "text" id="title" placeholder="web page title" value={this.state.titleInput} onChange={(e) => this.titleChange(e)}/>
        <input type = "text" id="url" placeholder="web page url" value={this.state.urlInput} onChange={(e) => this.urlChange(e)}/>
        <button onClick={(e)=>this.addWebPage(e)}>Analyse</button>
        <ul className="webs-list">{ this.renderWebs() }</ul>
      </form>
    );
  }
}

export default UserPanel;
