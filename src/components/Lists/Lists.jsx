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
    componentWillMount () {
        ListsRequests.getLists().then((response) => {
            this.setState({lists: response});
        });
    }
    onListUpdated = (response, action) => {
        if (action === 'delete') {
            let newLists = this.state.lists.filter((list) => {
                return list.id !== response.id;
            });
            this.setState({ lists: newLists });
        } else {
            this.setState({lists: [this.state.lists.map(list => list.id === response.id ? response : list)]});
        }
    };
    onAddListClick = () => {
        ListsRequests.addList(this.refs.inputListNameField.value).then((response) => {
            this.setState({lists: [...this.state.lists, response]});
        });
    };
    render () {
        return (
            <div className='Lists'>
                {this.state.lists ? this.state.lists.map((list) =>
                    <List key={list.id} onListUpdated={this.onListUpdated} list={list}/>
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
