import '../actions/taskActions';
import {GET_TASKS_SUCCESS, ADD_TASK_SUCCESS, UPDATE_TASK_SUCCESS, DELETE_TASK_SUCCESS} from '../actions/taskActions';

const initialState = { tasks: [] };

export function taskReducer (state = initialState, action) {
    switch (action.type) {
    case GET_TASKS_SUCCESS:
        return {...state, tasks: [...state.tasks, ...action.payload] };
    case ADD_TASK_SUCCESS:
        return {...state, tasks: [...state.tasks, action.payload] };
    case UPDATE_TASK_SUCCESS:
        return {...state, tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task) };
    case DELETE_TASK_SUCCESS:
        return {...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    }
    return state;
}
