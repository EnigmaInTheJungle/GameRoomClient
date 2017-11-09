import './List.scss';
import React, { Component } from 'react';
import Task from '../Task/Task';
import TasksRequests from '../../requests/tasksRequests';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newTaskContent: '',
            tasks: null
        };
    }
    handleClick = () => {
        TasksRequests.addTask(this.state.newTaskContent, this.props.list.id).then(() => {
            this.props.requestGetLists();
        });
    };
    onNewTaskAdded = (event) => {
        this.setState({
            newTaskContent: event.target.value});
    };
    onDeleteListClick = () => {
        TasksRequests.delList(this.props.list.id).then(() => {
            this.props.requestGetLists();
        });
    };
    componentWillMount () {
        TasksRequests.getTasks(this.props.list.id).then((response) => {
            this.setState({tasks: response});
        });
    }
    render () {
        return (
            <div className='List'>
                <div className='list-header'>
                    <div className="list-header-title">
                        <div className="list-header-title-icon"/>
                        <div className="list-header-text">
                            <span>{this.props.list.label}</span>
                        </div>
                    </div>
                    <div className="list-header-buttons">
                        <div className="button-edit-wrap">
                            <button onClick={this.onDeleteListClick}>X</button>
                        </div>
                        <div className="button-delete-wrap">
                            <button onClick={this.onDeleteListClick}>X</button>
                        </div>
                    </div>
                </div>
                <div className='list-add-task'>
                    <input type="text" className="inputField" onKeyUp={this.onNewTaskAdded}/>
                    <button onClick={this.handleClick}>Add task</button>
                </div>
                <div className='list-tasks'>
                    {
                        this.state.tasks ? this.state.tasks.map((task) =>
                            <Task key = {task.id} task={task} requestGetLists={this.props.requestGetLists}/>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

export default List;
