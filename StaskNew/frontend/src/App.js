import React from 'react'
import './App.css'
import Layout from './hoc/Layout/Layout'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'

class App extends React.Component {
	render() {
		let routes = (
			<Switch>
				<Route path="/auth" component={Auth} />
				<Route exact path="/" component={Home} />
				<Redirect to={"/"} />
			</Switch>
		);
		/*
		if (this.props.isAuthenticated) {
			routes = (
				<Switch>
					<Route path="/" exact component={QuizList} />
					<Redirect to={"/"} />
				</Switch>
			);
		} */

		return (
			<Layout>
				{routes}
			</Layout>
		);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
