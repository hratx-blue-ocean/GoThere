DROP DATABASE IF EXISTS gothere;
CREATE DATABASE gothere;
\c gothere;

CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR,
  phoneNumber VARCHAR,
  password VARCHAR,
);

INSERT INTO users(name, email, phoneNumber, password)
VALUES ('Test User', 'gothere@fake.com', '2104145466', 'password123');

INSERT INTO users(name, email, phoneNumber, password)
VALUES ('Jesse Perez', 'jesse@fake.com', '2104145466', 'password123');