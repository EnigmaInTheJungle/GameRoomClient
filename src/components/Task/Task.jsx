import './Task.css';
import React, { Component } from 'react';
// import Requests from '../../requests';

class Task extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='Task' onClick={this.props.setInputText.bind(this, this.props.content)}>
                <span>{this.props.content}</span>
            </div>
        );
    }
}

export default Task;
