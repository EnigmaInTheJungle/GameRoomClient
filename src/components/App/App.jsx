import './App.css';
import React, { Component } from 'react';
import Lists from '../Lists/Lists';
import Requests from '../../requests';

class App extends Component {
    constructor (props) {
        super(props);
        Requests.fillData({
            'access-token': 'DNREdWvGdA2f_eaj11BLtg',
            'client': 'fyiRhFMlVA8xe2NOu-5rAA',
            'uid': 'test@mail.com'
        });
        this.state = {
            lists: null
        };
    }
    render () {
        return (
            <div className='App'>
                <Lists lists={this.state.lists}/>
            </div>
        );
    }
}

export default App;
