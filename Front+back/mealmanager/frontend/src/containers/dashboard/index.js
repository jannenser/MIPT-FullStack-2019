import React, { Component, Fragment } from 'react';
import Header from '../../components/layout/Header';
import Dashboard from '../../components/meals/Dashboard';

class DashboardPage extends Component{
    render() {
        return (
            <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
            </Fragment>
        )
    }
}
             
export default DashboardPage;