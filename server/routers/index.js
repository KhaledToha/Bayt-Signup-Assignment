const express = require('express');
const userRouter = require('./userRouter');
const companyRouter = require('./companyRouter');

const router = express.Router();

router.use(userRouter);
router.use(companyRouter);

module.exports = router;
