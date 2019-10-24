import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, } from '../actions/fetch';

const initialState = {
    qupte: '',
    loading: false,
    err: '',
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START: 
            return {
                ...state,
                loading: true,
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                loading: false
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        default: 
            return state;
    }
}