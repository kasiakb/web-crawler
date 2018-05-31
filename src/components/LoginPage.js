import React, { Component } from 'react';
import SignInInputs from './SignInInputs';
import RegisterInputs from './RegisterInputs';
import UserPanel from './UserPanel';
import ButtonItem from './ButtonItem';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.loginData = this.loginData.bind(this)
    this.state = {
      signin: true,
      buttonText: "Register"
    }
  }

  registerOrSign(e) {
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

  loginData(data) {
    this.setState({
      loginData: data
    })
  }

  render() {
    let inputs
    let button = <ButtonItem
      text={this.state.buttonText}
      type={"button"}
      onClick={(e)=>this.registerOrSign(e)}
    />
    if(this.state.signin === true) {
      inputs = <SignInInputs loginData = {this.loginData} />
    }else if (this.state.signin === false){
      inputs = <RegisterInputs/>
    }if (this.state.loginData) {
      inputs = <UserPanel/>
      button = undefined
    }

    return (
      <div>
        {button}
        {inputs}
      </div>
    );
  }
}

export default LoginPage;
