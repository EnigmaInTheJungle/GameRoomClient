import './Task.scss';
import React, { Component } from 'react';
import EditForm from '../../Forms/EditForm/EditForm';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    changeTaskState: PropTypes.func.isRequired,
    upTaskPosition: PropTypes.func.isRequired,
    downTaskPosition: PropTypes.func.isRequired
};

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
        this.props.deleteTask(this.props.task.id);
    };
    handleSaveNewContentClick = (value) => {
        this.props.updateTask(this.props.task.id, value).then((response) => {
            if (response === 'success') {
                this.setState({isUpdating: false});
            }
        });
    };
    handleCancelNewContentClick = () => {
        this.setState({isUpdating: false});
    };
    handleCheckTask = () => {
        this.props.changeTaskState(this.props.task.id);
    };
    handleTaskUp = () => {
        this.props.upTaskPosition(this.props.task.id);
    };
    handleTaskDown = () => {
        this.props.downTaskPosition(this.props.task.id);
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

Task.propTypes = propTypes;

export default Task;
