import './List.css';
import React, { Component } from 'react';
import Requests from '../../requests';
import Task from '../Task/Task';

class List extends Component {
    constructor (props) {
        super(props);
    }
    handleClick = () => {
        Requests.addTask('new Task from react', this.props.list.id).then(() => {
            this.props.requestGetLists();
        });
    };
    render () {
        return (
            <div className='List'>
                <span>{this.props.list.id} {this.props.list.label}</span>
                <button onClick={this.handleClick}>New task</button>
                { this.props.tasks ? this.props.tasks.map((task) =>
                    <Task key = {task.id} label={task.label}/>
                ) : null }
            </div>
        );
    }
}

export default List;
