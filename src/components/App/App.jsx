import './App.css';
import React, { Component } from 'react';
import printMe from '../../print';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lists: null
        };
    }
    handleClick = () => {
        printMe().then((response) => {
            this.setState({ lists: response });
        });
    };
    render () {
        return (
            <div className='App'>
                <button onClick={this.handleClick}>Press</button>
                <p>Hello</p>
                { this.state.lists ? this.state.lists.map((list) =>
                    <div key={list.id} >
                        <div>{list.label}</div>
                    </div>
                ) : null }
            </div>
        );
    }
}

export default App;
