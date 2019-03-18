import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Dashboard = ({ component: Component, errorStatusCode, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (localStorage.getItem('token') && errorStatusCode !== 403) {
                    return( 
                        <Component />
                    );
                } else {
                    // redirect
                    console.log('redirecting!!!');
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

const mapStateToProps = state => ({
    errorStatusCode: state.errorStatusCode
});

export default withRouter(
connect( mapStateToProps, {})(Dashboard));
