import { combineReducers } from 'redux';
import listReducer from './listReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    lists: listReducer,
    tasks: taskReducer
});
