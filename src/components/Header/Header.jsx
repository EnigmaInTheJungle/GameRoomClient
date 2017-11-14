import './Header.scss';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import UserRequests from '../../requests/userRequests';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    constructor (props) {
        super(props);
    }
    handleSignOutClick = () => {
        UserRequests.signOut().then(() => {
            this.props.onSessionChanged(false);
        });
    };
    render () {
        return (
            <div className='header'>
                <FontAwesome
                    name='book'
                    size='2x'
                />
                <strong>Simple ToDo List</strong>
                <div className="sign-out-wrap">
                    {
                        this.props.isLoggedIn
                            ? <a href="#" onClick={this.handleSignOutClick}>
                                <FontAwesome
                                    className="sign-out-icon"
                                    name='sign-out'
                                    size='2x'
                                />
                            </a>
                            : null
                    }
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default withRouter(Header);
