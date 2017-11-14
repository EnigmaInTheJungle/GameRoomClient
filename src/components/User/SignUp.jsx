import './SignForm.scss';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserRequests from '../../requests/userRequests';

class SignUp extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let passwordConfirmation = this.refs.pc.value;
        UserRequests.signUp(email, password, passwordConfirmation).then(() => {
            this.props.onSessionChanged(true);
        });
    };
    render () {
        return (
            <div className='sign-form-wrap'>
                <div className="sign-form">
                    <strong>Sign up</strong>
                    <input name='email' type="email" placeholder="Email" ref="email"/>
                    <input type="password" placeholder="Password" ref="password"/>
                    <input type="password" placeholder="Confirm password" ref="pc"/>
                    <button onClick={this.handleClick}>Sign up</button>
                    <p>Already account? <Link to="/sign_in">Sign in</Link></p>
                </div>
            </div>
        );
    }
}

export default SignUp;
