import './Room.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Room extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='room'>
                <div className='room-title'>
                    <text>Room {this.props.title}</text>
                </div>
                <div className='room-img'>
                    <img src={this.props.image}/>
                </div>
                <div className='room-players'>
                    <text>Players {this.props.currentPlayers}/{this.props.maxPlayers}</text>
                </div>
            </div>
        );
    }
}

Room.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentPlayers: PropTypes.number.isRequired,
    maxPlayers: PropTypes.number.isRequired
};

export default Room;
