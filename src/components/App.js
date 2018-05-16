import React, { Component } from 'react';
import LoginPage from './LoginPage';
import UserPanel from './UserPanel';


class App extends Component {
  render() {
    return (
      <div>
        <LoginPage/>
        <UserPanel/>
      </div>
    );
  }
}

export default App;
