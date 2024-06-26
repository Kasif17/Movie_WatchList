import axios from 'axios';
import {
    GET_MOVIES,
    GET_MOVIE,
    ADD_MOVIE,
    UPDATE_MOVIE,
    DELETE_MOVIE,
    RATE_MOVIE,
    UPDATE_WATCH_STATUS
} from '../types/movieTypes';

const API_URL = 'http://localhost:5000/api/movies';

export const getMovies = () => async dispatch => {
    try {
        const res = await axios.get(API_URL);
        dispatch({ type: GET_MOVIES, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const getMovie = id => async dispatch => {
    try {
        const res = await axios.get(`${API_URL}/${id}`);
        dispatch({ type: GET_MOVIE, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const addMovie = movie => async dispatch => {
    try {
        const res = await axios.post(API_URL, movie);
        dispatch({ type: ADD_MOVIE, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const updateMovie = (id, movie) => async dispatch => {
    try {
        const res = await axios.patch(`${API_URL}/${id}`, movie);
        dispatch({ type: UPDATE_MOVIE, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const deleteMovie = id => async dispatch => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({ type: DELETE_MOVIE, payload: id });
    } catch (err) {
        console.error(err);
    }
};

export const rateMovie = (id, rating) => async dispatch => {
    try {
        const res = await axios.patch(`${API_URL}/${id}/rate`, { rating });
        dispatch({ type: RATE_MOVIE, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const updateWatchStatus = (id, watched) => async dispatch => {
    try {
        const res = await axios.patch(`${API_URL}/${id}/watch`, { watched });
        dispatch({ type: UPDATE_WATCH_STATUS, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};
