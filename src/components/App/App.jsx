import './App.scss';
import React, { Component } from 'react';
import Lists from '../Lists/Lists';
import Requests from '../../requests';

class App extends Component {
    constructor (props) {
        super(props);
        Requests.fillData({
            'access-token': 'hxk927Pj3Vc1nh3LoPeTyA',
            'client': 'zt5ljid03n3f0oFx-fTRdw',
            'uid': 'test@mail.com'
        });
    }
    render () {
        return (
            <div className='App'>
                <Lists />
            </div>
        );
    }
}

export default App;
