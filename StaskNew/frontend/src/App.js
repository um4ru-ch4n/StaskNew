import React from 'react'
import './App.css'
import Layout from './hoc/Layout/Layout'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import { autoLogin } from './store/actions/auth'
import Registration from './components/Registration/Registration'
import Logout from './components/Logout/Logout'
import CreateProject from './components/CreateProject/CreateProject'
import UserProjects from './components/UserProjects/UserProjects'
import Project from './components/Project/Project'

class App extends React.Component {
	UNSAFE_componentWillMount() {
		this.props.autoLogin();
	}

	render() {
		let routers = (
			<Switch>
				<Route path="/auth" component={Auth} />
				<Route path="/registration" component={Registration} />
				<Route exact path="/" component={Home} />
				<Redirect to={"/"} />
			</Switch>
		);
		
		if (this.props.isAuthenticated) {
			routers = (
				<Switch>
					<Route path="/create_project" component={CreateProject} />
					<Route path="/user_projects/project/:id" component={Project}/>
					<Route path="/user_projects" component={UserProjects} />
					<Route path="/logout" component={Logout} />
					<Route path="/" exact component={Home} />
					<Redirect to={"/"} />
				</Switch>
			);
		}
		
		return (
			<Layout>
				{routers}
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.authReducer.token
	};
}

function mapDispatchToProps(dispatch) {
	return {
		autoLogin: () => dispatch(autoLogin())
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
