import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/actions/movieActions';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie.movie);

    useEffect(() => {
        dispatch(getMovie(id));
    }, [dispatch, id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Genre: {movie.genre}</p>
            <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
            <p>Rating: {movie.rating}</p>
            <p>Review: {movie.review}</p>
            <Link to={`/edit/${movie._id}`}>Edit</Link>
        </div>
    );
};

export default MovieDetails;
