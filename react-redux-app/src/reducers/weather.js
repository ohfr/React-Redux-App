import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../actions/fetch';

const initalState = {
    weatherState: "",
    temp: '',
    date: '',
    loading: false,
    err: '',
}

export const reducer = (state=initalState, action) => {
    switch(action.type) {
        case FETCH_DATA_START: 
            return {
                ...state,
                loading: true,
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                weatherState: action.payload.weather_state_name,
                temp: action.payload.the_temp,
                loading: false
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                loading: false,
                err: action.payload
            }
    }
}