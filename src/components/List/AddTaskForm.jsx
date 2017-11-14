import './AddTaskForm.scss';
import React, { Component } from 'react';
import {addTask} from '../../redux/actions/taskActions';
import { connect } from 'react-redux';
import EditForm from '../EditForm/EditForm';

class AddTaskForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    onAddTaskClick = (value) => {
        this.props.addTask(value, this.props.listId).then(() => {
            //
        });
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
        addTask: (content) => dispatch(addTask(content))
    };
}

export default connect(null, mapDispatchToProps)(AddTaskForm);
