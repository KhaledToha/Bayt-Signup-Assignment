const connection = require('../config/connection');

exports.emailCompanyExistsQuery = (email) => {
  const query = {
    text: 'SELECT EXISTS(SELECT 1 FROM companies WHERE email = $1)',
    values: [email],
  };
  return connection.query(query);
};

exports.companySignupQuery = ({
  name, email, phone, password, country, address,
}) => {
  const query = {
    text: `INSERT INTO companies (name, email, phone, password, country, address)
          VALUES ($1, $2, $3, $4, $5, $6) RETURNING name, email, country, address`,
    values: [name, email, phone, password, country, address],
  };
  return connection.query(query);
};
