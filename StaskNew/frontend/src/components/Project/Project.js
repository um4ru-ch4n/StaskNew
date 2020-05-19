import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCurrentProject, fetchProjectUsers } from '../../store/actions/project';
import CreateTask from '../CreateTask/CreateTask';
import classes from './Project.css'

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
            <div>
                <h1>Проект {title}</h1>
                <h1>Тема {theme}</h1>
                <h1>Описание {description}</h1>
                <CreateTask projectUsers={this.props.projectUsers} />
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