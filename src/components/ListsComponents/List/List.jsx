import './List.scss';
import './ListHeader.scss';
import React, { Component } from 'react';
import AddTask from '../../TasksComponents/AddTask/AddTask';
import EditForm from '../../Forms/EditForm/EditForm';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import Tasks from '../../TasksComponents/Tasks/Tasks';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isUpdating: false,
            isExpanded: false
        };
    }
    componentWillMount () {
        this.props.getTasks(this.props.list.id);
    }
    onUpdating = () => {
        this.setState({isUpdating: true});
    };
    handleSaveNewLabelClick = (value) => {
        this.props.updateList(this.props.list.id, value).then(() => {
            this.setState({isUpdating: false});
        });
    };
    handleCancelNewLabelClick = () => {
        this.setState({isUpdating: false});
    };
    handleDeleteListClick = () => {
        this.props.deleteList(this.props.list.id);
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
        const expandedAddTask = this.state.isExpanded &&
            <div className="expanded">
                <div className='list-tasks'>
                    <Tasks listId={this.props.list.id}/>
                </div>
                <AddTask listId = {this.props.list.id}/>
            </div>;
        const editForm = <EditForm
            callbackConfirmClick={this.handleSaveNewLabelClick}
            confirmButtonLabel={'Save'}
            callbackCancelClick={this.handleCancelNewLabelClick}
            cancelButtonLabel={'Cancel'}
            defaultValue={this.props.list.label}
        />;
        const listHeader = <div className="list-header" style={style}>
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
                    <button className="button-update" onClick={this.onUpdating}>
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
        </div>;
        return (
            <div className='List'>
                {this.state.isUpdating ? editForm : listHeader}
                {expandedAddTask}
            </div>
        );
    }
}

List.propTypes = {
    list: PropTypes.object.isRequired,
    deleteList: PropTypes.func.isRequired,
    updateList: PropTypes.func.isRequired,
    getTasks: PropTypes.func.isRequired
};

export default List;
