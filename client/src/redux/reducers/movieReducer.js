// src/redux/reducers/movieReducer.js
import {
    GET_MOVIES,
    GET_MOVIE,
    ADD_MOVIE,
    UPDATE_MOVIE,
    DELETE_MOVIE,
    RATE_MOVIE,
    UPDATE_WATCH_STATUS
} from '../types/movieTypes';

const initialState = {
    movies: [],
    movie: null,
    loading: true,
    error: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload],
                loading: false
            };
        case UPDATE_MOVIE:
        case RATE_MOVIE:
        case UPDATE_WATCH_STATUS:
            return {
                ...state,
                movies: state.movies.map(movie =>
                    movie._id === action.payload._id ? action.payload : movie
                ),
                loading: false
            };
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(movie => movie._id !== action.payload),
                loading: false
            };
        default:
            return state;
    }
}
