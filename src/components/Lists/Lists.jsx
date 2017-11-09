import './Lists.scss';
import React, { Component } from 'react';
import List from '../List/List';
import ListsRequests from '../../requests/listsRequests';

class Lists extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lists: null
        };
    }
    requestGetLists = () => {
        ListsRequests.getLists().then((response) => {
            this.setState({lists: response});
        });
    };
    onAddListClick = () => {
        ListsRequests.addList(this.refs.inputListNameField.value).then((response) => {
            this.setState({lists: [...this.state.lists, response]});
        });
    };
    componentWillMount () {
        this.requestGetLists();
    }
    render () {
        return (
            <div className='Lists'>
                {this.state.lists ? this.state.lists.map((list) =>
                    <List key={list.id} requestGetLists={this.requestGetLists} list={list}/>
                ) : null}
                <div className='list-buttons'>
                    <input type='text' ref='inputListNameField'/>
                    <button onClick={this.onAddListClick}>AddList</button>
                </div>
            </div>
        );
    }
}

export default Lists;
