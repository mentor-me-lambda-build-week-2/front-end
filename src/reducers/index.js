import {
    REGISTER_START,
    LOGIN_START,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions';

const initialState = {
    error: '',
    errorStatusCode: null,
    fetchingData: false,
    isLoggingIn: false,
    isSelected: false
};

const reducer = (state = initialState, action) => {
switch (action.type) {
    case REGISTER_START: {
        return {
            ...state,
            isLoggingIn: true
        };
        }
    case LOGIN_START: {
    return {
        ...state,
        isLoggingIn: true
    };
    }
    case FETCH_DATA_START:
    return {
        ...state,
        error: '',
        fetchingData: true
    };
    case FETCH_DATA_SUCCESS:
    console.log(action.payload);
    return {
        ...state,
    };
    case FETCH_DATA_FAILURE:
    return {
        ...state,
        errorStatusCode: action.payload.status
    };
    default:
    return state;
}
};

export default reducer;
