import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects } from '../../store/actions/project';

class UserProjects extends Component {

    renderProjects() {
        return this.props.projects.map((project) => {
            return (
                <li
                    key={project.id}
                >
                    <NavLink to={'/project/' + project.id}>
                        {project.title}
                    </NavLink>
                </li>
            );
        })
    }

    UNSAFE_componentWillMount() {
        this.props.fetchProjects();
    }

    render() {
        return (
            <div>
                <div>
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
        fetchProjects: () => dispatch(fetchProjects())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);