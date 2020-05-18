import React, {Component} from 'react';
import { connect } from 'react-redux';
import { clearCurrentProject } from '../../store/actions/project';
import classes from './Project.css'

class Project extends Component {
    componentWillUnmount() {
        this.props.clearCurrentProject()
    }

    render() {
        const {title, theme, description} = this.props.currentProject;
        return (
            <div className={classes.card}>
                <h1>Проект: {title}</h1>
                <h1>Тема: {theme}</h1>
                <h1>Описание: {description}</h1>
            </div>            
        )
    }
}

function mapStateToProps(state) {
    return {
        currentProject: state.projectReducer.currentProject,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearCurrentProject: () => dispatch(clearCurrentProject())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Project);