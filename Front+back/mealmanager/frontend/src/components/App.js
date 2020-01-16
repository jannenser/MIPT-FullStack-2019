import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../store';
import DashboardPage from '../containers/dashboard';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <DashboardPage/>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));