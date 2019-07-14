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

class _SignupForm extends Component {

    constructor(){
        super();
        this.state = {
            name:"",
            email: "",
            password:""
        }
    }

    handleLogin(){
        const {name, email, password} = this.state;
        const {history, dispatch} = this.props;
        AuthAPI.signup(name, email, password)
        .then( user =>{
            dispatch(clearMessages());
            dispatch(login(user))
            history.push('/');
        })
        .catch( e => {
            dispatch(errorMessageAction("Cannot Login"));
        });
    }

    render() {
        const {name, email, password} = this.state;
        return (
            <DivStyle>
                <h2>Signup</h2>
                <label>Name:   </label>
                <input value={name} onChange={e => this.setState({name:e.target.value})}/>
                <br />
                <label>Email:   </label>
                <input value={email} type="email" onChange={e => this.setState({email:e.target.value})}/>
                <br />
                <label>Password:  </label>
                <input value={password} type="password" onChange={e => this.setState({password:e.target.value})}/>
                <br />
                <br />
                <button onClick={() => this.handleLogin()}>Signup</button>
                <p>Already a member? Login <a href="/login">here!</a></p>
            </DivStyle>
        );
    }
};

export const SignupForm = connect()(withRouter(_SignupForm));