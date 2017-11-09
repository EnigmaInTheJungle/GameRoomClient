import './EditForm.scss';
import React, { Component } from 'react';

class EditForm extends Component {
    constructor (props) {
        super(props);
    }
    handleSaveClick = () => {
        this.props.callbackSaveClick(this.refs.input.value);
    };
    render () {
        return (
            <div className='EditForm'>
                <div className='valueInput'>
                    <input type='text' defaultValue={this.props.defaultValue} ref='input'/>
                </div>
                <div className='buttons'>
                    <button onClick={this.handleSaveClick}>Save</button>
                    <button onClick={this.props.callbackCancelClick}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default EditForm;
