import './Window.scss';
import React, { Component } from 'react';
import GameRoom from '../GameRoom/GameRoom';
import Games from '../Games/Games';
import {games} from '../../../__mocks__/gameDataMock';
import Info from '../LeftArea/Info';
import {rooms} from '../../../__mocks__/roomDataMock';
import User from '../LeftArea/User';
import {userData} from '../../../__mocks__/userDataMock';

class Window extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <div className='window'>
                    <div className='left-area'>
                        <User {...userData}/>
                        <Info/>
                    </div>
                    <GameRoom rooms={rooms}/>
                    <Games games={games}/>
                </div>
            </div>
        );
    }
}

export default Window;
