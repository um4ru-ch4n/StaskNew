import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTodos, setCurrentTodo } from '../../store/actions/todo';

class ToDoList extends Component {

    UNSAFE_componentWillMount() {
        this.props.fetchTodos(this.props.currentProject.id);
    }

    renderToDos() {
        return this.props.todos.map((todo) => {
            return (
                <li
                    key={todo.id}
                >
                    <NavLink
                        to={todo.task + "/" + todo.id}
                        onClick={() => this.props.setCurrentTodo(todo.id)}
                    >
                        {todo.title}
                    </NavLink>
                </li>
            );
        })
    }

   render() {
       return(
            <div>
                <ul>
                    {this.renderToDos()}
                </ul>
            </div>
       )
   } 
}

function mapStateToProps(state) {
    return {
        todos: state.todoReducer.todos,
        currentTask: state.taskReducer.currentTask
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTodos: (taskId) => dispatch(fetchTodos(taskId)),
        setCurrentTodo: (todoId) => dispatch(setCurrentTodo(todoId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);