import './Games.scss';
import React, { Component } from 'react';
import Game from '../Game/Game';

class Games extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='games'>
                <h1>Games</h1>
                {this.props.games.map((game) =>
                    <Game {...game}/>
                )}
            </div>
        );
    }
}

export default Games;
