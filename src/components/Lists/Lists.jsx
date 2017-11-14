import './Lists.scss';
import {addList, getLists} from '../../redux/actions/listActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditForm from '../EditForm/EditForm';
import List from '../List/List';

// import PropTypes from 'prop-types';

// const propTypes = {
//     lists: PropTypes.array.isRequired
// };

class Lists extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        console.log(this.props);
        this.props.getLists().then((response) => {
            if (response === 'success') {
                //
            }
        });
    }
    onAddListClick = (value) => {
        this.props.addList(value).then(() => {
            //
        });
    };
    render () {
        return (
            <div className="lists-wrap">
                <div className='lists'>
                    {this.props.lists.map((list) =>
                        <List key={list.id} list={list}/>
                    )}
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

// Lists.propTypes = propTypes;

function mapStateToProps (state) {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getLists: () => dispatch(getLists()),
        addList: (label) => dispatch(addList(label))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
