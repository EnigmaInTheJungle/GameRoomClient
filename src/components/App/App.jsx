import './App.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Lists from '../ListsComponents/Lists/Lists';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import SignIn from '../User/SignIn';
import SignUp from '../User/SignUp';
import {validateToken} from '../../redux/actions/userActions';

class App extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.validateToken().catch(this.props.history.push('/sign_in'));
    }
    render () {
        return (
            <div className='App'>
                <Header isSignedIn={this.props.isSignedIn}/>
                {this.props.isSignedIn && <Lists/>}
                <div>
                    <Route path="/sign_in" component={SignIn}/>
                    <Route path="/sign_up" component={SignUp}/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
    validateToken: PropTypes.func.isRequired
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
        validateToken: () => dispatch(validateToken())
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));
