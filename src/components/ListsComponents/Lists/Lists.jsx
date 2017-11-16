import './Lists.scss';
import { deleteList, updateList } from '../../../redux/actions/listActions';
import AddList from '../AddList/AddList';
import { connect } from 'react-redux';
import { getTasks } from '../../../redux/actions/taskActions';
import List from '../List/List';
import PropTypes from 'prop-types';
import React from 'react';

const Lists = (props) => {
    return (
        <div className="lists-wrap">
            <div className='lists'>
                {props.lists.map((list) =>
                    <List key={list.id} list={list}
                        deleteList={props.deleteList}
                        getTasks={props.getTasks}
                        updateList={props.updateList}/>)
                }
                <AddList/>
            </div>
        </div>
    );
};

Lists.propTypes = {
    lists: PropTypes.array.isRequired,
    addList: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired,
    updateList: PropTypes.func.isRequired,
    getTasks: PropTypes.func.isRequired
};

function mapStateToProps (state) {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps (dispatch) {
    return {
        updateList: (listId, label) => dispatch(updateList(listId, label)),
        deleteList: (listId) => dispatch(deleteList(listId)),
        getTasks: (listId) => dispatch(getTasks(listId))
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(Lists));
