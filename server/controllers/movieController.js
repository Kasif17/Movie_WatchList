const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });
        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) return res.status(404).json({ error: 'Movie not found' });
        res.json(updatedMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) return res.status(404).json({ error: 'Movie not found' });
        res.json({ message: 'Movie deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const rateMovie = async (req, res) => {
    try {
        const { rating } = req.body;
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });

        movie.rating = rating;
        await movie.save();

        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateWatchStatus = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });

        movie.watched = req.body.watched;
        const updatedMovie = await movie.save();
        res.json(updatedMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
    rateMovie,
    updateWatchStatus
};
