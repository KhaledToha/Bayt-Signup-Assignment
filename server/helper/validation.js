const Joi = require('joi');

exports.individualSchema = Joi.object({

  firstName: Joi.string().required().min(3).max(15),
  lastName: Joi.string().required().min(3).max(20),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Z\d@$!%*?&]{8,}$/),
  confirmPassword: Joi.ref('password'),
  gender: Joi.string().valid('female', 'male'),
  phone: Joi.string().pattern(/^\+?[0-9]+$/),
  date: Joi.date().required(),
  address: Joi.string().required(),
});

exports.businessSchema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Z\d@$!%*?&]{8,}$/),
  confirmPassword: Joi.ref('password'),
  phone: Joi.string().pattern(/^\+?[0-9]+$/),
  country: Joi.string().required(),
  address: Joi.string().required(),
});
