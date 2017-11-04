import './App.css';
import React, { Component } from 'react';
import Lists from '../Lists/Lists';
import Requests from '../../requests';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lists: null
        };
    }
    handleClick1 = () => {
        Requests.getLists().then((response) => {
            this.setState({ lists: response });
        });
    };
    handleClick2 = () => {
        Requests.addList('new label from react');
    };
    render () {
        return (
            <div className='App'>
                <button onClick={this.handleClick1}>Press</button>
                <button onClick={this.handleClick2}>Press</button>
                <Lists lists={this.state.lists}/>
            </div>
        );
    }
}

export default App;
