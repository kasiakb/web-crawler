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

  render() {
    let inputs
    if (this.state.loginData) {
      inputs = <UserPanel/>
    } else {
      inputs = <LoginPage passLoginData = {this.passLoginData}/>
    }

    return (
      <div>
        {inputs}
      </div>
    );
  }
}

export default MainPage;
