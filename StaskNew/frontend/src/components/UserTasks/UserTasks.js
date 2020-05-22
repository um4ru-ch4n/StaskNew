import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTasks, setCurrentTask } from '../../store/actions/task';
import classes from './UserTasks.css' 

class UserTasks extends Component {

    UNSAFE_componentWillMount() {
        this.props.fetchTasks(this.props.currentProject.id);
    }

    renderTasks() {
        return this.props.tasks.map((task) => {
            return (
                <li
                    key={task.id}
                >
                    <NavLink
                        to={task.project + "/" + task.id}
                        onClick={() => this.props.setCurrentTask(task.id)}
                    >
                        {task.title}
                    </NavLink>
                </li>
            );
        })
    }
    render() {
        return (
            <div className={classes.UserTasks}>
                <div>
                    <h1>Список заданий</h1>
                    {
                        /* this.props.loading && this.props.projects.length !== 0
                            ? <Loader />
                            : <ul>
                                {this.renderProjects()}
                            </ul> */
                        <ul>
                            {this.renderTasks()}
                        </ul>
                    }
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        tasks: state.taskReducer.tasks,
        currentProject: state.projectReducer.currentProject,
        // loading: state.project.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTasks: (projectId) => dispatch(fetchTasks(projectId)),
        setCurrentTask: (taskId) => dispatch(setCurrentTask(taskId))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserTasks);