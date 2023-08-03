const bcrypt = require('bcrypt');
const { businessSchema } = require('../helper');
const { emailCompanyExistsQuery, companySignupQuery } = require('../database/index');
const { CustomError } = require('../helper');

const companySignup = (req, res, next) => {
  const values = req.body;
  const { email, password } = values;

  businessSchema.validateAsync(values, { abortEarly: true })
    .then(() => emailCompanyExistsQuery(email))
    .then((exists) => {
      if (exists.rows[0].exists !== false) {
        throw new CustomError(406, 'Email already exists');
      }
      return bcrypt.hash(password, 10);
    }).then((hash) => {
      values.password = hash;
      return companySignupQuery(values);
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

module.exports = companySignup;
