import './Task.css';
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
    render () {
        return (
            <div className='Task'>
                <span>
                    <input type='checkbox' checked={this.props.task.is_done} onClick={this.isDownChanged}/>
                    {this.props.task.content}
                    <button onClick={this.onTaskDeleted}>X</button>
                </span>
            </div>
        );
    }
}

export default Task;
