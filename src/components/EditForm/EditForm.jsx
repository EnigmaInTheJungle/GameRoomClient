import React, { Component } from 'react';

class EditForm extends Component {
    constructor (props) {
        super(props);
    }
    handleSaveNewLabelClick = () => {
        ListsRequests.updateList(this.props.list.id, this.refs.editLabelInput.value).then((response) => {
            this.setState({isUpdating: false});
            this.props.onListUpdated(response, 'update');
        });
    };
    handleCancelNewLabelClick = () => {
        this.setState({isUpdating: false});
    };
    render () {
        return (
            <div className='EditForm'>
                <input type='text' defaultValue={this.props.list.label} ref='editLabelInput'/>
                <div>
                    <button onClick={this.handleSaveNewLabelClick}>Save</button>
                    <button onClick={this.handleCancelNewLabelClick}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default EditForm;
