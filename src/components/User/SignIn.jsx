import './SignForm.scss';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserRequests from '../../requests/userRequests';
import {withRouter} from 'react-router-dom';

class SignIn extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        UserRequests.signIn(email, password).then(() => {
            this.props.onSessionChanged(true);
        });
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

export default withRouter(SignIn);
