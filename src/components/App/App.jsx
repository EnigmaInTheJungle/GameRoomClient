import './App.scss';
import React, { Component } from 'react';
import {signIn, signOut, signUp, validateToken} from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import {getLists} from '../../redux/actions/listActions';
import Header from '../Header/Header';
import Lists from '../ListsComponents/Lists/Lists';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import SignIn from '../User/SignIn';
import SignUp from '../User/SignUp';

class App extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.validateToken().then(() => {
            if (this.props.isSignedIn) {
                this.props.getLists().then(response => {
                    if (response === 'success') {
                        this.props.history.replace('/');
                    }
                });
            } else {
                this.props.history.replace('/sign_in');
            }
        });
    }
    render () {
        return (
            <div className='App'>
                <Header isSignedIn={this.props.isSignedIn} signOut={this.props.signOut}/>
                {this.props.isSignedIn ? <Lists/> : <SignIn signIn={this.props.signIn}/>}
                <div>
                    <Route path="/sign_up" render={() => <SignUp signUp={this.props.signUp}/>} />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
    getLists: PropTypes.func.isRequired,
    validateToken: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
};

App.defaultProps = {
    isSignedIn: false
};

function mapStateToProps (state) {
    return {
        isSignedIn: state.user.isSignedIn
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getLists: () => dispatch(getLists()),
        validateToken: () => dispatch(validateToken()),
        signIn: (email, password) => dispatch(signIn(email, password)),
        signUp: (email, password, passwordConfirmation) => dispatch(signUp(email, password, passwordConfirmation)),
        signOut: () => dispatch(signOut())
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));
