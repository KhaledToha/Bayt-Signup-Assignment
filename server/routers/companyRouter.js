const express = require('express');
const { companySignup } = require('../controllers');

const companyRouter = express.Router();

companyRouter.post('/signup/business', companySignup);

module.exports = companyRouter;
