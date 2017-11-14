import './List.scss';
import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import { connect } from 'react-redux';
import EditForm from '../EditForm/EditForm';
import {getTasks} from '../../redux/actions/taskActions';
import ListHeader from './ListHeader';
import Task from '../Task/Task';
import {updateList} from '../../redux/actions/listActions';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isUpdating: false,
            isExpanded: false
        };
    }
    componentWillMount () {
        this.props.getTasks().then(() => {
            //
        });
    }
    handleSaveNewLabelClick = (value) => {
        this.props.updateList(this.props.list.id, value).then(() => {
            this.setState({isUpdating: false});
        });
    };
    handleCancelNewLabelClick = () => {
        this.setState({isUpdating: false});
    };
    onUpdating = (isUpdating) => {
        this.setState({isUpdating: isUpdating});
    };
    onExpanding = () => {
        this.setState({isExpanded: !this.state.isExpanded});
    };
    render () {
        return (
            <div className='List'>
                {
                    this.state.isUpdating
                        ? <EditForm
                            callbackConfirmClick={this.handleSaveNewLabelClick}
                            confirmButtonLabel={'Save'}
                            callbackCancelClick={this.handleCancelNewLabelClick}
                            cancelButtonLabel={'Cancel'}
                            defaultValue={this.props.list.label}
                        />
                        : <ListHeader
                            list={this.props.list}
                            onUpdating={this.onUpdating}
                            onExpanding={this.onExpanding}
                            isExpanded={this.state.isExpanded}
                        />
                }
                {
                    this.state.isExpanded
                        ? <div className="expanded">
                            <div className='list-tasks'>
                                {this.props.tasks.map((task) =>
                                    <Task key = {task.id} task={task}/>
                                )
                                }
                            </div>
                            <AddTaskForm
                                listId = {this.props.list.id}
                                onAddTaskClick={this.onAddTaskClick}
                            />
                        </div>
                        : null
                }
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        tasks: state.tasks
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getTasks: () => dispatch(getTasks()),
        updateList: (listId, label) => dispatch(updateList(listId, label))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
