import React, { Component } from 'react'
import classes from './Home.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div className={classes.Home}>
                <h1>This is Home page!</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
		
	};
}

function mapDispatchToProps(dispatch) {
	return {
		
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));