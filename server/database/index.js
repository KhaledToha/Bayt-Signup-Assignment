const { emailExistsQuery, userSignupQuery } = require('./queries/users');
const { emailCompanyExistsQuery, companySignupQuery } = require('./queries/companies');

module.exports = {
  emailExistsQuery,
  userSignupQuery,
  emailCompanyExistsQuery,
  companySignupQuery,
};
