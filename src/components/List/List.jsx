import './List.css';
import React, { Component } from 'react';

class List extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='List'>
                <span>{this.props.label}</span>
                <button>ClickMe</button>
            </div>
        );
    }
}

export default List;
