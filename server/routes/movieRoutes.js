const express = require('express');
const router = express.Router();
const {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
    rateMovie,
    updateWatchStatus
} = require('../controllers/movieController');

router.get('/', getMovies);
router.get('/:id', getMovieById);
router.post('/', addMovie);
router.patch('/:id', updateMovie);
router.delete('/:id', deleteMovie);
router.patch('/:id/rate', rateMovie);
router.patch('/:id/watch', updateWatchStatus);

module.exports = router;
