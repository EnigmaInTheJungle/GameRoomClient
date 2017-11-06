import React, { Component } from 'react';
import Requests from '../../requests';

class SignIn extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let passwordConfirmation = this.refs.pc.value;
        Requests.signUp(email, password, passwordConfirmation);
    };
    render () {
        return (
            <div className='SignIn'>
                <input name='email' type="email" placeholder="email" ref="email"/>
                <input type="password" placeholder="password" ref="password"/>
                <input type="password" placeholder="password confirmation" ref="pc"/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default SignIn;
