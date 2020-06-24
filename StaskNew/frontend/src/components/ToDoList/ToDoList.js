import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';


import { connect } from 'react-redux';
import { fetchTodos, setCurrentTodo } from '../../store/actions/todo';


class ToDoList extends Component {
    state = {
        checked: []
    }

    UNSAFE_componentWillMount() {
        this.props.fetchTodos(this.props.currentTask.id);
    }

    handleToggle = value => () => {
        const { checked } = this.state
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked
        })
    };

    render() {
        return (
            <List>
                {
                    this.props.todos.map((todo) => {
                        const labelId = `checkbox-list-label-${todo.id}`;

                        return (
                            <ListItem key={todo.id} role={undefined} dense button onClick={this.handleToggle(todo.id)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={this.state.checked.indexOf(todo.id) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                        color={"primary"}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={todo.text} />
                            </ListItem>
                        );
                    })
                }
            </List>
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