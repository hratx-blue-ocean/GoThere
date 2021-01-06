DROP DATABASE IF EXISTS gothere;
CREATE DATABASE gothere;
\c gothere;

CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR,
  city VARCHAR,
  state VARCHAR,
  email VARCHAR,
  password VARCHAR,
  favorites VARCHAR
);

INSERT INTO users(name, address, city, state, email, password, favorites)
VALUES ('Test User', '1234 gothere St', 'Austin', 'TX', 'gothere@fake.com', 'password123', 2);

INSERT INTO users(name, address, city, state, email, password, favorites)
VALUES ('Jesse Perez', '4321 gothere St', 'Austin', 'TX', 'jessep@fake.com', 'password123', 2);