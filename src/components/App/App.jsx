import './App.css';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Lists from '../Lists/Lists';
import SignIn from '../User/SignIn';

class App extends Component {
    constructor (props) {
        super(props);
        Cookies.set('auth_token', JSON.stringify({
            'access-token': 'DNREdWvGdA2f_eaj11BLtg',
            'client': 'fyiRhFMlVA8xe2NOu-5rAA',
            'uid': 'test@mail.com'
        }));
    }
    render () {
        return (
            <div className='App'>
                <BrowserRouter>
                    <div>
                        <Link to="/">Home</Link>{' '}
                        <Link to="/sign_in">SignIn</Link>

                        <Switch>
                            <Route path="/sign_in" component={SignIn} />
                            <Route path="/" component={Lists} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
