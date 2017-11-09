import './Task.scss';
import React, { Component } from 'react';
import EditForm from '../EditForm/EditForm';
import TasksRequests from '../../requests/tasksRequests';

class Task extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isUpdating: false
        };
    }
    handleEditTaskClick = () => {
        this.setState({isUpdating: true});
    };
    handleDeleteTaskClick = () => {
        TasksRequests.delTask(this.props.task).then((response) => {
            this.props.onTaskUpdated(response, 'delete');
        });
    };
    handleSaveNewContentClick = (value) => {
        TasksRequests.updateTask(this.props.task, value).then((response) => {
            this.setState({isUpdating: false});
            this.props.onTaskUpdated(response, 'update');
        });
    };
    handleCancelNewContentClick = () => {
        this.setState({isUpdating: false});
    };
    handleCheckTask = () => {
        TasksRequests.changeTaskState(this.props.task).then((response) => {
            this.props.onTaskUpdated(response, 'update');
        });
    };
    handleTaskUp = () => {
        TasksRequests.upTaskPosition(this.props.task).then((response) => {
            this.props.onTaskUpdated(response, 'update');
        });
    };
    handleTaskDown = () => {
        TasksRequests.downTaskPosition(this.props.task).then((response) => {
            this.props.onTaskUpdated(response, 'update');
        });
    };
    render () {
        return (
            this.state.isUpdating
                ? <EditForm
                    defaultValue={this.props.task.content}
                    callbackSaveClick={this.handleSaveNewContentClick}
                    callbackCancelClick={this.handleCancelNewContentClick}
                />
                : <div className='Task'>
                    <div className='left-area'>
                        <input id='done-state' type='checkbox' checked={this.props.task.is_done} onChange={this.handleCheckTask}/>
                        <text className='task-content'>{this.props.task.content} </text>
                    </div>
                    <div className="right-area">
                        <span className='task-buttons'>
                            <i className="arrow up" onClick={this.handleTaskUp}/>
                            <i className="arrow down" onClick={this.handleTaskDown}/>
                            <strong className='edit-btn' onClick={this.handleEditTaskClick}>E</strong>
                            <strong className='delete-btn' onClick={this.handleDeleteTaskClick}>X</strong>
                        </span>
                    </div>
                </div>
        );
    }
}
export default Task;
