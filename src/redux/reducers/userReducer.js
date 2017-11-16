import {
    SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_UP_SUCCESS, VALIDATION_TOKEN_ERROR,
    VALIDATION_TOKEN_SUCCESS
} from '../actions/userActions';

const initialState = { isSignedIn: false};

export default function userReducer (state = initialState, action) {
    switch (action.type) {
    case SIGN_IN_SUCCESS:
        return { ...state, isSignedIn: true };
    case SIGN_OUT_SUCCESS:
        return initialState;
    case SIGN_UP_SUCCESS:
        return { ...state, isSignedIn: true };
    case VALIDATION_TOKEN_SUCCESS:
        return { ...state, isSignedIn: true };
    case VALIDATION_TOKEN_ERROR:
        return initialState;
    default:
        return state;
    }
}
