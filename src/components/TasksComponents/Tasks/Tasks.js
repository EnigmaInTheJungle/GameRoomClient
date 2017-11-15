import {getTasks, deleteTask, updateTask, changeTaskState, upTaskPosition, downTaskPosition} from '../../../redux/actions/taskActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import EditForm from 'EditForm/EditForm';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const propTypes = {
    tasks: PropTypes.array.isRequired,
    listId: PropTypes.number.isRequired,
    getTasks: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    changeTaskState: PropTypes.func.isRequired,
    upTaskPosition: PropTypes.func.isRequired,
    downTaskPosition: PropTypes.func.isRequired
};

class Tasks extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.getTasks(this.props.listId);
    }
    render () {
        return (
            <div className="tasks-wrap">
                <div className='tasks'>
                    {this.props.tasks.map((task) =>
                        <div key={task.id}>
                            <Task task={task}
                                deleteTask={this.props.deleteTask}
                                updateTask={this.props.updateTask}
                                changeTaskState={this.props.changeTaskState}
                                upTaskPosition={this.props.upTaskPosition}
                                downTaskPosition={this.props.downTaskPosition}/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Tasks.propTypes = propTypes;

function mapStateToProps (state) {
    return {
        tasks: state.tasks
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getTasks: (listId) => dispatch(getTasks(listId)),
        updateTask: (taskId, content) => dispatch(updateTask(taskId, content)),
        deleteTask: (taskId) => dispatch(deleteTask(taskId)),
        changeTaskState: (taskId) => dispatch(changeTaskState(taskId)),
        upTaskPosition: (taskId) => dispatch(upTaskPosition(taskId)),
        downTaskPosition: (taskId) => dispatch(downTaskPosition(taskId))
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(Tasks));
