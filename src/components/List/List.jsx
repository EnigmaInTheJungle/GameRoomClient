import './List.scss';
import React, { Component } from 'react';
import ListsRequests from '../../requests/listsRequests';
import Task from '../Task/Task';
import TasksRequests from '../../requests/tasksRequests';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tasks: null,
            isUpdating: false
        };
    }
    componentWillMount () {
        TasksRequests.getTasks(this.props.list.id).then((response) => {
            this.setState({tasks: response});
        });
    }
    onAddTaskClick = () => {
        TasksRequests.addTask(this.refs.newTaskContentInput.value, this.props.list.id).then((response) => {
            this.setState({tasks: [...this.state.tasks, response]});
        });
    };
    handleEditListClick = () => {
        this.setState({isUpdating: true});
    };
    handleDeleteListClick = () => {
        ListsRequests.delList(this.props.list.id).then((response) => {
            this.props.onListUpdated(response, 'delete');
        });
    };
    handleSaveNewLabelClick = () => {
        ListsRequests.updateList(this.props.list.id, this.refs.editLabelInput.value).then((response) => {
            this.setState({isUpdating: false});
            this.props.onListUpdated(response, 'update');
        });
    };
    handleCancelNewLabelClick = () => {
        this.setState({isUpdating: false});
    };
    onTaskUpdated = (response, action) => {
        if (action === 'delete') {
            let newTasks = this.state.tasks.filter((task) => {
                return task.id !== response.id;
            });
            this.setState({ tasks: newTasks });
        } else {
            let i = this.state.tasks.findIndex((task) => {
                return task.id === response.id;
            });
            let tasks = this.state.tasks;
            tasks[i] = response;
            this.setState({tasks: tasks});
        }
    };
    render () {
        return (
            <div className='List'>
                {
                    this.state.isUpdating
                        ? <div>
                            <input type='text' defaultValue={this.props.list.label} ref='editLabelInput'/>
                            <div>
                                <button onClick={this.handleSaveNewLabelClick}>Save</button>
                                <button onClick={this.handleCancelNewLabelClick}>Cancel</button>
                            </div>
                        </div>
                        : <div className='list-header'>
                            <div className="list-header-title">
                                <div className="list-header-title-icon"/>
                                <div className="list-header-text">
                                    <span>{this.props.list.label}</span>
                                </div>
                            </div>
                            <div className="list-header-buttons">
                                <div className="button-edit-wrap">
                                    <button onClick={this.handleEditListClick}>E</button>
                                </div>
                                <div className="button-delete-wrap">
                                    <button onClick={this.handleDeleteListClick}>X</button>
                                </div>
                            </div>
                        </div>
                }
                <div className='list-add-task'>
                    <input type="text" className="inputField" ref="newTaskContentInput"/>
                    <button onClick={this.onAddTaskClick}>Add task</button>
                </div>
                <div className='list-tasks'>
                    {
                        this.state.tasks ? this.state.tasks.map((task) =>
                            <Task key = {task.id} task={task} onTaskUpdated={this.onTaskUpdated}/>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

export default List;
