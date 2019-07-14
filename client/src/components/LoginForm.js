import React, {Component} from 'react';
import { AuthAPI } from '../lib/auth';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { errorMessageAction, login, clearMessages } from '../lib/redux/actions';
import styled from "@emotion/styled";

const DivStyle = styled.div`
  button {
    background-color: tomato;
    color: white;
    border-radius: 5px;
}
  input {
    border: 1px solid tomato;
    border-radius: 5px;
  }
  text-align: left;
  padding: 2vh 10vw;
`

class _LoginForm extends Component {

    constructor(){
        super();
        this.state = {
            email:"",
            password:""
        }
    }

    handleLogin(){
        const {email, password} = this.state;
        const {history, dispatch} = this.props;
        AuthAPI.login(email, password)
        .then( user =>{
            dispatch(clearMessages());
            dispatch(login(user))
            history.push('/');
        })
        .catch( () => {
            dispatch(errorMessageAction("Invalid login credentials"));
        });
    }

    render() {
        const { email, password } = this.state;
        return (
            <DivStyle>
                <h2>Login</h2>
                <label>Email:  </label>
                <input value={ email } type="email" onChange={e => this.setState({email:e.target.value})}/>
                <br />
                <label>Password:  </label>
                <input value={ password } type="password" onChange={e => this.setState({password:e.target.value})}/>
                <br />
                <br />
                <button onClick={() => this.handleLogin()}>Login</button>
                <br />
                <p>Still not a user? You can register for free <a href="/signup">here</a></p>
            </DivStyle>
        );
    }
};

export const LoginForm = connect()(withRouter(_LoginForm));