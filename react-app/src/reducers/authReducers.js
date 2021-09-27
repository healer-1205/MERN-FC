import {
    SET_CURRENT_USER,
    USER_LOADING,
    GET_ERRORS
} from '../actionTypes/user';

// const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    error: "",
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: (action.payload ? true: false),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ERRORS:
            return{
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}