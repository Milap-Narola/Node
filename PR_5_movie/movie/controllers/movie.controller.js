const Movie = require('../models/movie.schema');

// Create a movie
const createMovie = (req, res) => {
    const newMovie = new Movie({
        title: req.body.title,
        description: req.body.description,
        releaseDate: req.body.releaseDate,
        category: req.body.category,
        actors: req.body.actors.split(',').map(name => ({ name })), // Split actors by comma
        image: req.file.path
    });

    if (newMovie.title) {
        newMovie.save()
            .then(movie => res.status(201).json(movie))
            .catch(err => res.status(500).send("Error saving movie"));
    } else {
        res.status(400).send("Title is required");
    }
};

// Get all movies
const getAllMovies = (req, res) => {
    Movie.find({})
        .then(movies => res.render('movies', { movies })) // Render movies.ejs with the list of movies
        .catch(err => res.status(500).send("Error fetching movies"));
};

// Export the controller functions
module.exports = {
    createMovie,
    getAllMovies
};