import './App.scss';
import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import AuthRoute from '../User/AuthRoute';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Lists from '../ListsComponents/Lists/Lists';
import PropTypes from 'prop-types';
import SignIn from '../User/SignIn';
import SignUp from '../User/SignUp';
import {validateToken} from '../../redux/actions/userActions';

class App extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.validateToken();
    }
    render () {
        return (
            <div className='App'>
                <Header isSignedIn={this.props.isSignedIn}/>
                <Route path="/sign_up" component={SignUp} />
                <Route path="/sign_in" component={SignIn} />
                <AuthRoute path="/" component={Lists} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
