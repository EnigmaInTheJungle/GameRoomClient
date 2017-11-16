import './AddList.scss';
import React, { Component } from 'react';
import {addList} from '../../../redux/actions/listActions';
import { connect } from 'react-redux';
import EditForm from '../../Forms/EditForm/EditForm';
import PropTypes from 'prop-types';

class AddList extends Component {
    constructor (props) {
        super(props);
    }
    onAddListClick = (label) => {
        this.props.addList(label);
    };
    render () {
        return (
            <EditForm
                callbackConfirmClick={this.onAddListClick}
                confirmButtonLabel={'Add list'}
                placeholder={'New list'}
            />
        );
    }
}

AddList.propsType = {
    addList: PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
    return {
        addList: (label) => dispatch(addList(label))
    };
}

export default connect(null, mapDispatchToProps)(AddList);
