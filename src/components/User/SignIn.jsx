import './SignForm.scss';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class SignIn extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        this.props.signIn(email, password);
    };
    render () {
        return (
            <div className='sign-form-wrap'>
                <div className="sign-form">
                    <strong>Sign in</strong>
                    <input name='email' type="email" placeholder="Email" ref="email"/>
                    <input type="password" placeholder="Password" ref="password"/>
                    <button onClick={this.handleClick}>Sign in</button>
                    <p>Don`t have an account? <Link to="/sign_up">Sign up</Link></p>
                </div>
            </div>
        );
    }
}

SignIn.propsType = {
    signIn: PropTypes.func.isRequired
};

export default SignIn;
