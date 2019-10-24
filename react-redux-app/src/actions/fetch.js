import axios from 'axios';
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

// area=res.data.woeid
// dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})

export const fetchData = (query) => (dispatch) => {
    let area;
    dispatch({type: FETCH_DATA_START})
    axios.get(`https://metaweather.com/api/location/search/?query=${query}`)
    .then(res => console.log(res) )
    .catch(err => dispatch({type: FETCH_DATA_ERROR, payload: err}))

    axios.get(`https://metaweather.com/api/location/${area}`)
        .then(res => console.log(res))
        .catch(err => dispatch({type: FETCH_DATA_ERROR, payload: err}))
}