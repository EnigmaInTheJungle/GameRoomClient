import React, { Component } from 'react';
import UserRequests from '../../requests/userRequests';

class SignOut extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        UserRequests.signOut();
    };
    render () {
        return (
            <div className='SignOut'>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default SignOut;
