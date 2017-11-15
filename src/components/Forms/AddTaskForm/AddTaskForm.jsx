import './AddTaskForm.scss';
import React, { Component } from 'react';
import {addTask} from '../../../redux/actions/taskActions';
import { connect } from 'react-redux';
import EditForm from '../EditForm/EditForm';

class AddTaskForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    onAddTaskClick = (content) => {
        this.props.addTask(this.props.listId, content);
    };
    toggleExpand = () => {
        this.setState({isExpanded: !this.state.isExpanded});
    };
    render () {
        return (
            this.state.isExpanded
                ? <EditForm
                    callbackConfirmClick={this.onAddTaskClick}
                    confirmButtonLabel={'Add new task'}
                    callbackCancelClick={this.toggleExpand}
                    cancelButtonLabel={'Cancel'}
                    placeholder={'New task'}
                />
                : <div className="add-task-holder" onClick={this.toggleExpand}>
                Add new task
                </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addTask: (listId, content) => dispatch(addTask(listId, content))
    };
}

export default connect(null, mapDispatchToProps)(AddTaskForm);
