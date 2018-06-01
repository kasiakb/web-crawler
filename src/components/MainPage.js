import React, { Component } from 'react';
import UserPanel from './UserPanel';
import LoginPage from './LoginPage';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.passLoginData = this.passLoginData.bind(this)
    this.state = {

    }
  }

  passLoginData(data) {
    this.setState({
      loginData: data
    })
  }

  view() {
    if (this.state.loginData) {
      return  <UserPanel/>
    } else {
      return <LoginPage passLoginData = {this.passLoginData}/>
    }
  }

  render() {
    return (
      <div>
        {this.view()}
      </div>
    );
  }
}

export default MainPage;
