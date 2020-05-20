import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCurrentProject, fetchProjectUsers } from '../../store/actions/project';
import CreateTask from '../CreateTask/CreateTask';
import classes from './Project.css'
import UserTasks from '../UserTasks/UserTasks'

class Project extends Component {
    componentWillUnmount() {
        this.props.clearCurrentProject()
    }

    UNSAFE_componentWillMount() {
        this.props.fetchProjectUsers(this.props.currentProject.id)
    }


    render() {
        const { title, theme, description } = this.props.currentProject;
        return (
            <div className={classes.Project}>
                <div class="jumbotron">
                <h2 class="display-4">{title}</h2>
                <p class="lead">{theme}</p>
                <hr class="my-4"/>
                <p>{description}</p>
                <div style={{display: "flex"}}>
                <CreateTask projectUsers={this.props.projectUsers} />
                <UserTasks />
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
        fetchProjectUsers: (projectId) => dispatch(fetchProjectUsers(projectId))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Project);