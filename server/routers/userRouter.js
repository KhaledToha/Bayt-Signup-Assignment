const express = require('express');
const { userSignup } = require('../controllers');

const userRouter = express.Router();

userRouter.post('/signup/user', userSignup);

module.exports = userRouter;
