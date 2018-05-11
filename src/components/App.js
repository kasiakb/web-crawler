import React, { Component } from 'react';
import LoginPage from './LoginPage';
import UserPanel from './UserPanel';
import Inputs from './Inputs';

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage/>
        <Inputs/>
        <UserPanel/>
      </div>
    );
  }
}

export default App;
