import '../actions/listActions';
import {GET_LISTS_SUCCESS, ADD_LIST_SUCCESS, UPDATE_LIST_SUCCESS, DELETE_LIST_SUCCESS} from '../actions/listActions';

export default function listReducer (state = [], action) {
    switch (action.type) {
    case GET_LISTS_SUCCESS:
        return [...state, ...action.payload];
    case ADD_LIST_SUCCESS:
        return [...state, action.payload];
    case UPDATE_LIST_SUCCESS:
        return [...state, state.lists.map(list => list.id === action.payload.id ? action.payload : list)];
    case DELETE_LIST_SUCCESS:
        return [...state, state.lists.filter(list => list.id !== action.payload)];
    }
    return state;
}
