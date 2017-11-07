import React, { Component } from 'react';
import Requests from '../../requests';

class SignIn extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        Requests.signIn(email, password);
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
