import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCurrentProject, fetchProjectUsers } from '../../store/actions/project';
import CreateTask from '../CreateTask/CreateTask';
import classes from './Project.css'
import UserTasks from '../UserTasks/UserTasks'

class Project extends Component {
    /* componentWillUnmount() {
        this.props.clearCurrentProject()
    } */

    UNSAFE_componentWillMount() {
        this.props.fetchProjectUsers(this.props.currentProject.id)
        const pExist = this.props.location.pathname.match(/\d+/g);
        if (pExist[0] !== this.props.currentProject.id + ''){
            this.props.history.push('/user_projects');
        }
    }


    render() {
        const { title, theme, description } = this.props.currentProject;
        return (
            <div className={classes.Project}>
                <div className="jumbotron">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{theme}</p>
                    <hr className="my-4" />
                    <p>{description}</p>
                    <div style={{ display: "flex" }}>
                        <UserTasks />
                        <CreateTask projectUsers={this.props.projectUsers} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentProject: state.projectReducer.currentProject,
        projectUsers: state.projectReducer.projectUsers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearCurrentProject: () => dispatch(clearCurrentProject()),
        fetchProjectUsers: (projectId) => dispatch(fetchProjectUsers(projectId)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Project);