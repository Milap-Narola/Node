const { Router } = require('express');
const { getAllUsers, createUser, deleteUser, login, } = require('../controllers/user.controller');
const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/login', login);
userRouter.get('/login', (req, res) => {
    res.render('login')
});

userRouter.get('/logout', (req, res) => {
    res.clearCookie('id').send({ msg: 'Logged Out' });
});



module.exports =  userRouter;
