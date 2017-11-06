// import './List.css';
import React, { Component } from 'react';
import List from '../List/List';
import Requests from '../../requests';

class Lists extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lists: null
        };
    }
    componentWillMount () {
        this.requestGetLists();
    }
    requestGetLists = () => {
        Requests.getLists().then((response) => {
            this.setState({lists: response});
        });
    };
    onAddListClick = () => {
        Requests.addList(this.refs.inputListNameField.value).then(() => {
            this.requestGetLists();
        });
    };
    render () {
        return (
            <div className='Lists'>
                {this.state.lists ? this.state.lists.map((list) =>
                    <List key={list.id} requestGetLists={this.requestGetLists} list={list} tasks={list.tasks}/>
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
