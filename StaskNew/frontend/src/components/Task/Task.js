import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCurrentTask } from '../../store/actions/task';
import classes from './Task.css'

class Task extends Component {
    /* componentWillUnmount() {
        this.props.clearCurrentTask()
    } */

    render() {
        const { title, description } = this.props.currentTask;
        return (
            <div className={classes.Task}>
                <div className="jumbotron">
                    <h2 className="display-4">{title}</h2>
                    <hr className="my-4" />
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentTask: state.taskReducer.currentTask
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearCurrentTask: () => dispatch(clearCurrentTask()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);