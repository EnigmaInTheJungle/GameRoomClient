import { combineReducers } from 'redux';
import lists from './listReducer';
import tasks from './taskReducer';

export default combineReducers({
    lists,
    tasks
});
