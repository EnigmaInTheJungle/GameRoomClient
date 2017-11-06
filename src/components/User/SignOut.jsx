import React, { Component } from 'react';
import Requests from '../../requests';

class SignOut extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        Requests.signOut();
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
