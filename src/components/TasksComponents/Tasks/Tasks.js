import './Tasks.scss';
import {deleteTask, updateTask, changeTaskState, upTaskPosition, downTaskPosition} from '../../../redux/actions/taskActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Task from '../Task/Task';

const Tasks = (props) => {
    return (
        <div className="tasks-wrap">
            <div className='tasks'>
                {props.tasks
                    .filter(task => task.list_id === props.listId)
                    .map((task) =>
                        <Task key={task.id} task={task}
                            deleteTask={props.deleteTask}
                            updateTask={props.updateTask}
                            changeTaskState={props.changeTaskState}
                            upTaskPosition={props.upTaskPosition}
                            downTaskPosition={props.downTaskPosition}/>
                    )}
            </div>
        </div>
    );
};

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    listId: PropTypes.number.isRequired,
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    changeTaskState: PropTypes.func.isRequired,
    upTaskPosition: PropTypes.func.isRequired,
    downTaskPosition: PropTypes.func.isRequired
};

function mapStateToProps (state) {
    return {
        tasks: state.tasks
    };
}

function mapDispatchToProps (dispatch) {
    return {
        updateTask: (task, content) => dispatch(updateTask(task, content)),
        deleteTask: (task) => dispatch(deleteTask(task)),
        changeTaskState: (task) => dispatch(changeTaskState(task)),
        upTaskPosition: (task) => dispatch(upTaskPosition(task)),
        downTaskPosition: (task) => dispatch(downTaskPosition(task))
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(Tasks));
