import './Game.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Game extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='game'>
                <div className='game-img'>
                    <img src={this.props.image}/>
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string
};

export default Game;
