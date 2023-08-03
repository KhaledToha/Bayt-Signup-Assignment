const bcrypt = require('bcrypt');
const { individualSchema } = require('../helper');
const { emailExistsQuery, userSignupQuery } = require('../database/index');
const { CustomError } = require('../helper');

const userSignup = (req, res, next) => {
  const values = req.body;
  const { email, password } = values;

  individualSchema.validateAsync(values, { abortEarly: true })
    .then(() => emailExistsQuery(email))
    .then((exists) => {
      if (exists.rows[0].exists !== false) {
        throw new CustomError(406, 'Email already exists');
      }
      return bcrypt.hash(password, 10);
    }).then((hash) => {
      values.password = hash;
      return userSignupQuery(values);
    })
    .then((data) => {
      res.status(201).json({
        error: false,
        message: 'User Signed Up Successfully',
        data: data.rows[0],
      });
    })
    .catch((err) => {
      if ('isJoi' in err) {
        next(new CustomError(406, err.details[0].message));
      } else {
        next(err);
      }
    });
};

module.exports = userSignup;
