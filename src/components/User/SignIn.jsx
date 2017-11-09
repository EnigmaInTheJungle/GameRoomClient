import React, { Component } from 'react';
import UserRequests from '../../requests/userRequests';

class SignIn extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        UserRequests.signIn(email, password);
    };
    render () {
        return (
            <div className='SignIn'>
                <input name='email' type="email" placeholder="email" ref="email"/>
                <input type="password" placeholder="password" ref="password"/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default SignIn;
