import '../actions/taskActions';
import {
    GET_TASKS_SUCCESS, ADD_TASK_SUCCESS, UPDATE_TASK_SUCCESS, DELETE_TASK_SUCCESS,
    CHANGE_TASK_STATE_SUCCESS, UP_TASK_POSITION_SUCCESS, DOWN_TASK_POSITION_SUCCESS
} from '../actions/taskActions';

export default function taskReducer (state = [], action) {
    switch (action.type) {
    case GET_TASKS_SUCCESS:
        return [...state, ...action.payload];
    case ADD_TASK_SUCCESS:
        return [...state, action.payload];
    case UPDATE_TASK_SUCCESS:
        return [...state.map(task => task.id === action.payload.id ? action.payload : task)];
    case DELETE_TASK_SUCCESS:
        return [...state.filter(task => task.id !== action.payload.id)];
    case CHANGE_TASK_STATE_SUCCESS:
        return [...state.map(task => task.id === action.payload.id ? action.payload : task)];
    case UP_TASK_POSITION_SUCCESS:
        return updatePositions([...state], [action.payload]);
    case DOWN_TASK_POSITION_SUCCESS:
        return updatePositions([...state], [action.payload]);
    }
    return state;
}

function updatePositions (state, payload) {
    let retState = state.filter(task => task.list_id !== payload[0][0].list_id);
    return [...retState, ...payload[0]];
}
