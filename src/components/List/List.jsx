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
    render () {
        let inputUpdateTask = '';
        if (this.state.isUpdateRaised) {
            inputUpdateTask = <div>
                <input value="Work"/>
            </div>;
        }
        return (
            <div className='List'>
                <span>{this.props.list.id} {this.props.list.content}</span>
                <button onClick={this.handleClick}>New task</button>
                {inputUpdateTask}
                <input type="text" className="inputField" onKeyUp={this.onNewTaskAdded}/>
                { this.props.tasks ? this.props.tasks.map((task) =>
                    <Task key = {task.id} content={task.content} setInputText={this.setInputText}/>
                ) : null }
            </div>
        );
    }
}

export default List;
