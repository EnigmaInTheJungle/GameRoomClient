import './App.scss';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from '../Header/Header';
import Lists from '../Lists/Lists';
import {Route} from 'react-router-dom';
import SignIn from '../User/SignIn';
import SignUp from '../User/SignUp';
import UserRequests from '../../requests/userRequests';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }
    componentWillMount () {
        UserRequests.validateToken().then((response) => {
            this.onSessionChanged(response);
        });
    }
    onSessionChanged = (isLoggedIn) => {
        this.setState({isLoggedIn: isLoggedIn});
        if (isLoggedIn === false) {
            this.props.history.replace('/sign_in');
        } else {
            this.props.history.replace('/');
        }
    };
    render () {
        return (
            <div className='App'>
                <Header isLoggedIn={this.state.isLoggedIn} onSessionChanged={this.onSessionChanged}/>
                {
                    this.state.isLoggedIn
                        ? <Lists/>
                        : null
                }
                <div>
                    <Route path="/sign_in" render={(props) => <SignIn {...props} onSessionChanged={this.onSessionChanged}/>} />
                    <Route path="/sign_up" render={(props) => <SignUp {...props} onSessionChanged={this.onSessionChanged}/>} />
                </div>
            </div>
        );
    }
}

export default App;
