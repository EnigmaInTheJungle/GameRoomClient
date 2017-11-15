import './EditForm.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditForm extends Component {
    constructor (props) {
        super(props);
    }
    handleSaveClick = () => {
        if (this.input.value.trim() !== '') {
            this.props.callbackConfirmClick(this.input.value);
            this.input.value = this.props.defaultValue;
        }
    };
    render () {
        return (
            <div className='EditForm'>
                <div className='valueInput'>
                    <input
                        type='text'
                        defaultValue={this.props.defaultValue}
                        placeholder={this.props.placeholder}
                        ref={(input) => { this.input = input }}
                    />
                </div>
                <div className='buttons'>
                    <button onClick={this.handleSaveClick}>
                        {this.props.confirmButtonLabel}
                    </button>
                    {
                        this.props.callbackCancelClick
                            ? <button onClick={this.props.callbackCancelClick}>
                                {this.props.cancelButtonLabel}
                            </button>
                            : null
                    }
                </div>
            </div>
        );
    }
}

EditForm.propTypes = {
    callbackConfirmClick: PropTypes.func.isRequired,
    confirmButtonLabel: PropTypes.string.isRequired,
    callbackCancelClick: PropTypes.func,
    cancelButtonLabel: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string
};

EditForm.defaultProps = {
    defaultValue: '',
    placeholder: ''
};

export default EditForm;
