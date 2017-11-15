import './Lists.scss';
import { addList, deleteList, updateList } from '../../../redux/actions/listActions';
import { connect } from 'react-redux';
import EditForm from '../../Forms/EditForm/EditForm';
import { getTasks } from '../../../redux/actions/taskActions';
import List from '../List/List';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    lists: PropTypes.array.isRequired,
    addList: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired,
    updateList: PropTypes.func.isRequired,
    getTasks: PropTypes.func.isRequired
};

const Lists = (props) => {
    const onAddListClick = (label) => {
        props.addList(label);
    };
    return (
        <div className="lists-wrap">
            <div className='lists'>
                {props.lists.map((list) =>
                    <List key={list.id} list={list}
                        deleteList={props.deleteList}
                        getTasks={props.getTasks}
                        updateList={props.updateList}/>)
                }
                <EditForm
                    callbackConfirmClick={onAddListClick}
                    confirmButtonLabel={'Add list'}
                    placeholder={'New list'}
                />
            </div>
        </div>
    );
};

Lists.propTypes = propTypes;

function mapStateToProps (state) {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps (dispatch) {
    return {
        addList: (label) => dispatch(addList(label)),
        updateList: (listId, label) => dispatch(updateList(listId, label)),
        deleteList: (listId) => dispatch(deleteList(listId)),
        getTasks: (listId) => dispatch(getTasks(listId))
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(Lists));
