import './User.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='user'>
                <div className='user-img'>
                    <img src='http://www.sp-fan.ru/upload/iblock/a94/sp_wow_guy.png'/>
                </div>
                <div className='user-name'>
                    <text>User: {this.props.nickname}</text>
                </div>
                <div className='user-fav-game'>
                    <text>Favorite game: {this.props.favoriteGame}</text>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    nickname: PropTypes.string.isRequired,
    favoriteGame: PropTypes.string.isRequired
};

export default User;
