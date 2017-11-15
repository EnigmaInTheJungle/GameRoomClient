import './Lists.scss';
import { addList, deleteList, getLists, updateList } from '../../../redux/actions/listActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditForm from '../../Forms/EditForm/EditForm';
import List from '../List/List';
import PropTypes from 'prop-types';

const propTypes = {
    lists: PropTypes.array.isRequired,
    getLists: PropTypes.func.isRequired,
    addList: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired,
    updateList: PropTypes.func.isRequired
};

class Lists extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.getLists();
    }
    onAddListClick = (label) => {
        this.props.addList(label);
    };
    render () {
        return (
            <div className="lists-wrap">
                <div className='lists'>
                    {this.props.lists.map((list) =>
                        <div key={list.id}>
                            <List list={list}
                                deleteList={this.props.deleteList}
                                updateList={this.props.updateList}/>
                        </div>)
                    }
                    <EditForm
                        callbackConfirmClick={this.onAddListClick}
                        confirmButtonLabel={'Add list'}
                        placeholder={'New list'}
                    />
                </div>
            </div>
        );
    }
}

Lists.propTypes = propTypes;

function mapStateToProps (state) {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getLists: () => dispatch(getLists()),
        addList: (label) => dispatch(addList(label)),
        updateList: (listId, label) => dispatch(updateList(listId, label)),
        deleteList: (listId) => dispatch(deleteList(listId))
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(Lists));
