import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, updateMovie } from '../redux/actions/movieActions';
import { useParams, useNavigate } from 'react-router-dom';
//import './EditMovie.css'; // Import CSS file

const EditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movie = useSelector(state => state.movie.movie);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [editMode, setEditMode] = useState(true); // State for managing edit mode

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
      setRating(movie.rating.toString()); // Convert rating to string for input compatibility
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie(id, { title, description, releaseYear, genre, rating: parseInt(rating) }));
    navigate('/');
  };

  const handleEditModeToggle = () => {
    setEditMode(!editMode); // Toggle edit mode
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="edit-movie-container">
      <h1>Edit Movie</h1>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <label>
            Release Year:
            <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
          </label>
          <label>
            Genre:
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
          </label>
          <label>
            Rating:
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={handleEditModeToggle}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Release Year: {releaseYear}</p>
          <p>Genre: {genre}</p>
          <p>Rating: {rating}</p>
          <button onClick={handleEditModeToggle}>Edit Movie</button>
        </div>
      )}
    </div>
  );
};

export default EditMovie;
