const connection = require('../config/connection');

exports.emailExistsQuery = (email) => {
  const query = {
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)',
    values: [email],
  };
  return connection.query(query);
};

exports.userSignupQuery = ({
  firstName, lastName, email, phone, password, date, gender, address,
}) => {
  const query = {
    text: `INSERT INTO users (firstname, lastname, email, phone, password, date, gender, address)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING firstname, lastname, email, phone, date, gender, address`,
    values: [firstName, lastName, email, phone, password, date, gender, address],
  };
  return connection.query(query);
};
