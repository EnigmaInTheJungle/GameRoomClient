import './Task.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditForm from '../EditForm/EditForm';
import FontAwesome from 'react-fontawesome';
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
        this.props.delTask(this.props.task).then((response) => {
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
                    callbackConfirmClick={this.handleSaveNewContentClick}
                    confirmButtonLabel={'Save'}
                    callbackCancelClick={this.handleCancelNewContentClick}
                    cancelButtonLabel={'Cancel'}
                />
                : <div className='Task'>
                    <div className='left-area'>
                        <div className="checkbox-wrapper">
                            <input className='done-state' type='checkbox' checked={this.props.task.is_done} onChange={this.handleCheckTask}/>
                        </div>
                        <text className='task-content'>{this.props.task.content} </text>
                    </div>
                    <div className="right-area">
                        <div className="pos-buttons">
                            <div className="arrow-up-wrap">
                                <button className="arrow up" onClick={this.handleTaskUp}>
                                    <FontAwesome name='sort-asc'/>
                                </button>
                            </div>
                            <div className="arrow-down-wrap">
                                <button className="arrow down" onClick={this.handleTaskDown}>
                                    <FontAwesome name='sort-desc'/>
                                </button>
                            </div>
                        </div>
                        <div className="edit-del-buttons">
                            <div className="edit-btn-wrap">
                                <button className='edit-btn' onClick={this.handleEditTaskClick}>
                                    <FontAwesome name='pencil'/>
                                </button>
                            </div>
                            <div className="delete-btn-wrap">
                                <button className='delete-btn' onClick={this.handleDeleteTaskClick}>
                                    <FontAwesome name='trash'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getLists: () => dispatch(getLists()),
        addList: (label) => dispatch(addList(label))
    };
}

export default connect(null, mapDispatchToProps)(Task);
