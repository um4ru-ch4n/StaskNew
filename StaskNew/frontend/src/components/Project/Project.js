import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../store/actions/project';

class Project extends Component {
    constructor(props) {
        super(props);
        //const key = parseInt(props.location.pathname.match(/\d+/)) если сбросить число проектов в store, то оно будет работать
        const key = 0;
        this.state = {
          id: key,
        };
      }
    UNSAFE_componentWillMount() {
        this.props.fetchProjects();
    }

    render(){
        const {id} = this.state;
        console.log(id)
        const {title, theme, description} = this.props.projects[id];
        return (
            <div>
                <h1>Проект {title}</h1>
                <h1>Тема {theme}</h1>
                <h1>Описание {description}</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(Project);