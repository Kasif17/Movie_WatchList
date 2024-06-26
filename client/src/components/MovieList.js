
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, deleteMovie, rateMovie,updateWatchStatus } from '../redux/actions/movieActions';
import { Link } from 'react-router-dom';

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movie.movies);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    const handleDelete = id => {
        dispatch(deleteMovie(id));
    };

    const handleRate = (id, rating) => {
        dispatch(rateMovie(id, rating));
    };

    const handleWatchStatus = (id, watched) => {
        dispatch(updateWatchStatus(id, watched));
    };

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div key={movie._id} className="movie-card">
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <p>Release Year: {movie.releaseYear}</p>
                    <p>Genre: {movie.genre}</p>
                    <p>Rating: {movie.rating}</p>
                    <button onClick={() => handleRate(movie._id, movie.rating + 1)} className='button'>Rate +1</button>
                    <button onClick={() => handleWatchStatus(movie._id, !movie.watched)} className='button'>
                            {movie.watched ? "Unwatch" : "Watch"}
                        </button>
                    <Link to={`/edit/${movie._id}`} className="button">Edit</Link>
                    <button onClick={() => handleDelete(movie._id)} className="button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default MovieList;





























// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteMovie, rateMovie, updateWatchStatus } from '../redux/actions/movieActions';
// import { Link } from 'react-router-dom';

// const MovieList = () => {
//     const dispatch = useDispatch();
//     const movies = useSelector(state => state.movie.movies);

//     const handleDelete = (id) => {
//         dispatch(deleteMovie(id));
//     };

//     const handleRate = (id, rating) => {
//         dispatch(rateMovie(id, rating));
//     };

//     const handleWatchStatus = (id, watched) => {
//         dispatch(updateWatchStatus(id, watched));
//     };

//     return (
//         <div>
//             <h1>Movie List</h1>
//             <ul>
//                 {movies.map(movie => (
//                     <li key={movie._id}>
//                         <h2>{movie.title}</h2>
//                         <p>{movie.description}</p>
//                         <p>Release Year: {movie.releaseYear}</p>
//                         <p>Genre: {movie.genre}</p>
//                         <p>Rating: {movie.rating}</p>
//                         <p>Watched: {movie.watched ? "Yes" : "No"}</p>
//                         <button onClick={() => handleRate(movie._id, movie.rating + 1)}>Rate +1</button>
//                         <button onClick={() => handleWatchStatus(movie._id, !movie.watched)}>
//                             {movie.watched ? "Unwatch" : "Watch"}
//                         </button>
//                         <button onClick={() => handleDelete(movie._id)}>Delete</button>
//                         <Link to={`/edit/${movie._id}`}>Edit</Link>
//                     </li>
//                 ))}
//             </ul>
//             <Link to="/add">Add Movie</Link>
//         </div>
//     );
// };

// export default MovieList;
// src/components/MovieList.js