import './Task.css';
import React, { Component } from 'react';
// import Requests from '../../requests';

class Task extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='Task'>
                <span>{this.props.label}</span>
            </div>
        );
    }
}

export default Task;
