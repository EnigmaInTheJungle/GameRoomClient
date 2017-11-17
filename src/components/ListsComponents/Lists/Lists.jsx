import './Lists.scss';
import {deleteList, getLists, updateList} from '../../../redux/actions/listActions';
import React, { Component } from 'react';
import AddList from '../AddList/AddList';
import { connect } from 'react-redux';
import { getTasks } from '../../../redux/actions/taskActions';
import List from '../List/List';
import PropTypes from 'prop-types';

class Lists extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.getLists();
    }
    render () {
        return (
            <div className="lists-wrap">
                <div className='lists'>
                    {this.props.lists.map((list) =>
                        <List key={list.id} list={list}
                            deleteList={this.props.deleteList}
                            getTasks={this.props.getTasks}
                            updateList={this.props.updateList}/>)
                    }
                    <AddList/>
                </div>
            </div>
        );
    }
}

Lists.propTypes = {
    lists: PropTypes.array.isRequired,
    getLists: PropTypes.func.isRequired,
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
        getLists: () => dispatch(getLists()),
        updateList: (listId, label) => dispatch(updateList(listId, label)),
        deleteList: (listId) => dispatch(deleteList(listId)),
        getTasks: (listId) => dispatch(getTasks(listId))
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(Lists));
