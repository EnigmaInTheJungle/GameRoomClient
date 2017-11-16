import './Header.scss';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor (props) {
        super(props);
    }
    handleSignOutClick = () => {
        this.props.signOut();
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
                        this.props.isSignedIn
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
    isSignedIn: PropTypes.bool.isRequired
};

export default Header;
