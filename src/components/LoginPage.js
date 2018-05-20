import React, { Component } from 'react';
import SignInInputs from './SignInInputs';
import RegisterInputs from './RegisterInputs';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signin: true,
      buttonText: "Register"
    }
  }

  changeView(e) {
    e.preventDefault();
    if(this.state.signin === true) {
      this.setState({
        signin: false,
        buttonText: "Sign in"
      });
    }else{
      this.setState({
        signin: true,
        buttonText: "Register"
      });
    }
  }

  render() {
    let inputs
    if(this.state.signin === true) {
      inputs = <SignInInputs/>
    }else{
      inputs = <RegisterInputs/>
    }

    return (
    <div>
      <button
        type="button"
        onClick={(e)=>this.changeView(e)}
        >
        {this.state.buttonText}
        </button>
      {inputs}
    </div>
    );
  }
}

export default LoginPage;
