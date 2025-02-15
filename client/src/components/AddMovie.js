import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/actions/movieActions';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [genre, setGenre] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMovie({ title, description, releaseYear, genre }));
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Movie</h1>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Release Year:
                <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
            </label>
            <label>
                Genre:
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </label>
            <button type="submit" className='button'>Add</button>
        </form>
    );
};

export default AddMovie;

