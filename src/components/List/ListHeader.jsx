import './ListHeader.scss';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ListsRequests from '../../requests/listsRequests';

class ListHeader extends Component {
    constructor (props) {
        super(props);
    }
    handleEditListClick = () => {
        this.props.onUpdating(true);
    };
    handleDeleteListClick = () => {
        ListsRequests.delList(this.props.list.id).then((response) => {
            this.props.onListUpdated(response, 'delete');
        });
    };
    handleleftAreaClick = () => {
        this.props.onExpanding();
    }
    render () {
        let style = {};
        if (this.props.isExpanded) {
            style.backgroundColor = '#f5f5f5';
            style.borderRadius = '2px 2px 0 0';
        }
        return (
            <div className="list-header" style={style}>
                <div className="left-area" onClick={this.handleleftAreaClick}>
                    {
                        this.props.isExpanded
                            ? <FontAwesome name="caret-down"/>
                            : <FontAwesome name="caret-right"/>
                    }
                    <div className="list-header-text">
                        <span>{this.props.list.label}</span>
                    </div>
                </div>
                <div className="right-area">
                    <div className="button-edit-wrap">
                        <button onClick={this.handleEditListClick}>
                            <FontAwesome
                                name='pencil'
                            />
                        </button>
                    </div>
                    <div className="button-delete-wrap">
                        <button onClick={this.handleDeleteListClick}>
                            <FontAwesome
                                name='trash'
                            />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListHeader;
