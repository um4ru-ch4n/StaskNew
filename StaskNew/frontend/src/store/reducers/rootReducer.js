import { combineReducers } from 'redux';
import authReducer from './auth';
import projectReducer from './project';

export default combineReducers({
    authReducer,
    projectReducer
})