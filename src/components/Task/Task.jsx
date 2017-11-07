import './Task.scss';
import React, { Component } from 'react';
import Requests from '../../requests';

class Task extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isUpdating: false
        };
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
    startUpdating = (event) => {
        event.persist();
        this.setState({isUpdating: true}, () => {
            this.refs.updateInput.value = this.props.task.content;
        });
    }
    closeUpdating = () => {
        this.setState({isUpdating: false});
    }
    onTaskUpdated = (event) => {
        if (event.key === 'Enter') {
            this.setState({isUpdating: false});
            Requests.updateTask(this.props.task, event.target.value).then(() => {
                this.props.requestGetLists();
            });
        } else {
            this.setState({currentContent: this.state.currentContent + event.key});
        }
    }
    render () {
        return (
            <div onDoubleClick={this.startUpdating} className='Task'>
                <input id='done-state' type='checkbox' checked={this.props.task.is_done} onClick={this.isDownChanged}/>
                {this.state.isUpdating ? (
                    <input type='text' ref='updateInput' className='task-input-update' autoFocus={true} onKeyUp={this.onTaskUpdated} onMouseLeave={this.closeUpdating}/>
                ) : (
                    <text className='task-content' >{this.props.task.content}</text>
                )}
                <span className='task-buttons'>
                    <i className="arrow up" onClick={this.onTaskUpped}></i>
                    <i className="arrow down" onClick={this.onTaskDowned}></i>
                    <strong className='delete-btn' onClick={this.onTaskDeleted}>X</strong>
                </span>
            </div>
        );
    }
}
export default Task;
