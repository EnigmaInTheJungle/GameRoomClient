import './List.scss';
import './ListHeader.scss';
import React, { Component } from 'react';
import AddTaskForm from '../../Forms/AddTaskForm/AddTaskForm';
import EditForm from '../../Forms/EditForm/EditForm';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const propTypes = {
    list: PropTypes.object.isRequired,
    deleteList: PropTypes.func.isRequired,
    updateList: PropTypes.func.isRequired
};

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isUpdating: false,
            isExpanded: false
        };
    }
    handleSaveNewLabelClick = (value) => {
        this.props.updateList(this.props.list.id, value).then(() => {
            this.setState({isUpdating: false});
        });
    };
    handleDeleteListClick = () => {
        this.props.deleteList(this.props.list.id);
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
        let style = {};
        if (this.props.isExpanded) {
            style.backgroundColor = '#f5f5f5';
            style.borderRadius = '2px 2px 0 0';
        }
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
                        : <div className="list-header" style={style}>
                            <div className="left-area" onClick={this.onExpanding}>
                                {
                                    this.props.isExpanded
                                        ? <FontAwesome name="caret-down"/>
                                        : <FontAwesome name="caret-right"/>
                                }
                                <div className="list-header-text">
                                    <span>{this.props.list.label}</span>
                                </div>
                            </div>
                            <div className="right-area">
                                <div className="button-edit-wrap">
                                    <button onClick={this.onUpdating}>
                                        <FontAwesome
                                            name='pencil'
                                        />
                                    </button>
                                </div>
                                <div className="button-delete-wrap">
                                    <button onClick={this.handleDeleteListClick}>
                                        <FontAwesome
                                            name='trash'
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                }
                {
                    this.state.isExpanded
                        ? <div className="expanded">
                            <div className='list-tasks'>
                                <Tasks listId={this.props.list.id}/>
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

List.propTypes = propTypes;

export default List;
