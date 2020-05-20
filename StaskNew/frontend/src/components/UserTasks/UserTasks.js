import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTasks } from '../../store/actions/task';
import classes from './UserTasks.css' 

class UserTasks extends Component {

    UNSAFE_componentWillMount() {
        this.props.fetchTasks();
    }

    renderTasks() {
        
    }
    render() {
        console.log(this.props)
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
        // loading: state.project.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTasks: () => dispatch(fetchTasks())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserTasks);