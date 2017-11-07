import './List.scss';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Requests from '../../requests';
import Task from '../Task/Task';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newTaskContent: '',
            tasks: null
        };
    }
    handleClick = () => {
        Requests.addTask(this.state.newTaskContent, this.props.list.id).then(() => {
            this.props.requestGetLists();
        });
    };
    onNewTaskAdded = (event) => {
        this.setState({
            newTaskContent: event.target.value});
    };
    onDeleteListClick = () => {
        Requests.delList(this.props.list.id).then(() => {
            this.props.requestGetLists();
        });
    };
    componentWillMount () {
        Requests.getTasks(this.props.list.id).then((response) => {
            this.setState({tasks: response});
        });
    }
    render () {
        return (
            <div className='List'>
                <div className='list-header'>
                    <text>{this.props.list.label}</text>
                    <button onClick={this.onDeleteListClick}>X</button>
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
