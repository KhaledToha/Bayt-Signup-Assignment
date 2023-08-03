BEGIN;

DROP TABLE IF EXISTS users, companies CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(55) NOT NULL,
    lastName VARCHAR(55) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    phone VARCHAR(60) NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender VARCHAR(55) NOT NULL,
    date DATE NOT NULL,
    address TEXT NOT NULL
);

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    phone VARCHAR(60) NOT NULL,
    password VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    address TEXT NOT NULL
);

COMMIT;