import './List.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Requests from '../../requests';
import Task from '../Task/Task';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newTaskContent: '',
            isUpdateRaised: false
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
    setInputText = (text) => {
        this.setState({isUpdateRaised: true});
        ReactDOM.findDOMNode(this).getElementsByClassName('inputField')[0].value = text;
    };
    onDeleteListClick = () => {
        Requests.delList(this.props.list.id).then(() => {
            this.props.requestGetLists();
        });
    };
    render () {
        return (
            <div className='List'>
                <div className='list-header'>
                    <span >{this.props.list.id} {this.props.list.name}</span>
                    <button onClick={this.onDeleteListClick}>DeleteList</button>
                </div>
                <div className='list-add-task'>
                    <button onClick={this.handleClick}>New task</button>
                    <input type="text" className="inputField" onKeyUp={this.onNewTaskAdded}/>
                </div>
                <div className='list-tasks'>
                    { this.props.tasks ? this.props.tasks.map((task) =>
                        <Task key = {task.id} content={task.content} setInputText={this.setInputText}/>
                    ) : null }
                </div>
            </div>
        );
    }
}

export default List;
