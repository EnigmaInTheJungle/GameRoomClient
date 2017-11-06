import './Task.scss';
import React, { Component } from 'react';
import Requests from '../../requests';

class Task extends Component {
    constructor (props) {
        super(props);
    }
    isDownChanged = () => {
        Requests.changeTaskState(this.props.task).then(() => {
            this.props.requestGetLists();
        });
    }
    onTaskDeleted = () => {
        Requests.delTask(this.props.task).then(() => {
            this.props.requestGetLists();
        });
    }
    onTaskUpped = () => {
        Requests.upTaskPosition(this.props.task).then(() => {
            this.props.requestGetLists();
        });
    }
    onTaskDowned = () => {
        Requests.downTaskPosition(this.props.task).then(() => {
            this.props.requestGetLists();
        });
    }
    render () {
        return (
            <div className='Task'>
                <input className='task-state' type='checkbox' checked={this.props.task.is_done} onClick={this.isDownChanged}/>
                <text className='task-content'>{this.props.task.content}</text>
                <span className='task-buttons'>
                    <button onClick={this.onTaskUpped}>Up</button>
                    <button onClick={this.onTaskDowned}>Down</button>
                    <button onClick={this.onTaskDeleted}>X</button>
                </span>
            </div>
        );
    }
}

export default Task;
