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
        Requests.getLists().then((responce) => {
            this.setState({lists: responce});
        });
    };
    onAddListClick = () => {
        Requests.addList('new label from react').then(() => {
            this.requestGetLists();
        });
    };
    render () {
        return (
            <div className='Lists'>
                <button onClick={this.onAddListClick}>AddList</button>
                {this.state.lists ? this.state.lists.map((list) =>
                    <List key={list.id} requestGetLists={this.requestGetLists} list={list} tasks={list.tasks}/>
                ) : null}
            </div>
        );
    }
}

export default Lists;
