import { combineReducers } from 'redux';
import authReducer from './auth';
import projectReducer from './project';
import taskReducer from './task';

export default combineReducers({
    authReducer,
    projectReducer,
    taskReducer
})