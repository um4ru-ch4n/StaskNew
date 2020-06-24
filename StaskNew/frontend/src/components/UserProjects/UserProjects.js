import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects, setCurrentProject } from '../../store/actions/project';
import classes from './UserProjects.css' 
class UserProjects extends Component {

    UNSAFE_componentWillMount() {
        this.props.fetchProjects();
    }
    
    onProjectClickHandler = (projectId) => {
        this.props.setCurrentProject(projectId)
    }

    renderProjects() {
        return this.props.projects.map((project) => {
            return (
                <li
                    key={project.id}
                >
                    <NavLink
                        to={'user_projects/' + project.id}
                        onClick={() => this.onProjectClickHandler(project.id)}
                    >
                        {project.title}
                    </NavLink>
                </li>
            );
        })
    }

    render() {
        return (
            <div className={classes.card}>
                <div className={classes.cardBody}>
                    <h1>Список проектов</h1>
                    {
                        /* this.props.loading && this.props.projects.length !== 0
                            ? <Loader />
                            : <ul>
                                {this.renderProjects()}
                            </ul> */
                        <ul>
                            {this.renderProjects()}
                        </ul>
                    }

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projectReducer.projects,
        // loading: state.project.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        setCurrentProject: (projectId) => dispatch(setCurrentProject(projectId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);