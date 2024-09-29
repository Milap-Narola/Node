const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    releaseDate: { type: Date },
    category: { type: String },
    actors: [{ name: String }],
    image: { type: String }, 
    ratings: [{ value: Number }],
    comments: [{ text: String }],
    addedBy: { type: String },
});

module.exports = mongoose.model('Movie', movieSchema);