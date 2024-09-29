const express = require('express');
const router = express.Router();
const multer = require('multer');
const movieController = require('../controllers/movie.controller');
const  middleware = require('../middlewares/user.middleware')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.get('/create', (req, res) => {
    res.render('createMovie');
});


router.post('/create', upload.single('image'), movieController.createMovie);


router.get('/', movieController.getAllMovies);

module.exports = router;