import { combineReducers } from 'redux';
import authReducer from './auth';
import projectReducer from './project';
import taskReducer from './task';
import todoReducer from './todo';

export default combineReducers({
    authReducer,
    projectReducer,
    taskReducer,
    todoReducer
})