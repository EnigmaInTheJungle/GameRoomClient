import './List.css';
import React, { Component } from 'react';
import Requests from '../../requests';
import Task from '../Task/Task';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newTaskLabel: ''
        };
    }
    onNewTaskClick = () => {
        Requests.addTask(this.state.newTaskLabel, this.props.list.id).then(() => {
            this.props.requestGetLists();
        });
    };
    onDeleteListClick = () => {
        Requests.deleteList(this.props.list.id).then(() => {
            this.props.requestGetLists();
        });
    };
    onNewTaskLabelChange = (event) => {
        this.setState({newTaskLabel: event.target.value});
    };
    render () {
        return (
            <div className='List'>
                <span>{this.props.list.id} {this.props.list.label}</span>
                <button onClick={this.onNewTaskClick}>New task</button>
                <input type="text" onChange={this.onNewTaskLabelChange}/>
                <button onClick={this.onDeleteListClick}>DeleteList</button>
                { this.props.tasks ? this.props.tasks.map((task) =>
                    <Task key = {task.id} label={task.label}/>
                ) : null }
            </div>
        );
    }
}

export default List;
