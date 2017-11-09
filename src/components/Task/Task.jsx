import './Task.scss';
import React, { Component } from 'react';
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
    handleSaveNewContentClick = () => {
        TasksRequests.updateTask(this.props.task, this.refs.editContentInput.value).then((response) => {
            this.setState({isUpdating: false});
            this.props.onTaskUpdated(response, 'update');
        });
    };
    handleCancelNewContentClick = () => {
        this.setState({isUpdating: false});
    };
    // isDownChanged = () => {
    //     TasksRequests.changeTaskState(this.props.task).then(() => {
    //         this.props.requestGetLists();
    //     });
    // };
    // onTaskUpped = () => {
    //     TasksRequests.upTaskPosition(this.props.task).then(() => {
    //         this.props.requestGetLists();
    //     });
    // };
    // onTaskDowned = () => {
    //     TasksRequests.downTaskPosition(this.props.task).then(() => {
    //         this.props.requestGetLists();
    //     });
    // };
    render () {
        return (
            <div className='Task'>
                {
                    this.state.isUpdating
                        ? <div>
                            <input type='text' defaultValue={this.props.task.content} ref='editContentInput'/>
                            <div>
                                <button onClick={this.handleSaveNewContentClick}>Save</button>
                                <button onClick={this.handleCancelNewContentClick}>Cancel</button>
                            </div>
                        </div>
                        : <div>
                            <input id='done-state' type='checkbox' checked={this.props.task.is_done} onClick={this.isDownChanged}/>
                            <text className='task-content' >{this.props.task.content} </text>
                            <span className='task-buttons'>
                                <i className="arrow up" onClick={this.onTaskUpped} />
                                <i className="arrow down" onClick={this.onTaskDowned} />
                                <strong className='edit-btn' onClick={this.handleEditTaskClick}>E</strong>
                                <strong className='delete-btn' onClick={this.handleDeleteTaskClick}>X</strong>
                            </span>
                        </div>
                }
            </div>
        );
    }
}
export default Task;
