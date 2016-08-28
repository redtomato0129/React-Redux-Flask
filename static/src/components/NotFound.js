import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/auth';


function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const NotFound = connect(mapStateToProps, mapDispatchToProps)(
    <div className="col-md-8">
        <h1>Not Found</h1>
    </div>
);

export default NotFound;
