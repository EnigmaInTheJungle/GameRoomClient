import './App.scss';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import React, { Component } from 'react';
import Lists from '../Lists/Lists';
import SignIn from '../User/SignIn';
import SignOut from '../User/SignOut';
import SignUp from '../User/SignUp';

class App extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='App'>
                <BrowserRouter>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/sign_in">SignIn</Link>
                        <Link to="/sign_out">SignOut</Link>
                        <Link to="/sign_up">SignUp</Link>

                        <Switch>
                            <Route path="/sign_in" component={SignIn} />
                            <Route path="/sign_out" component={SignOut} />
                            <Route path="/sign_up" component={SignUp} />
                            <Route path="/" component={Lists} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
