DROP DATABASE IF EXISTS gothere;
CREATE DATABASE gothere;
\c gothere;

CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR,
  phoneNumber VARCHAR,
  password VARCHAR
);

CREATE TABLE usertrips (
  tripid SERIAL PRIMARY KEY,
  email VARCHAR,
  startdate VARCHAR,
  enddate VARCHAR,
  destination VARCHAR,
  businesstrip BOOLEAN,
  CONSTRAINT fk_tripemail
  FOREIGN KEY(email)
  REFERENCES users(email)
);

CREATE TABLE attractions (
  attractionid SERIAL PRIMARY KEY,
  tripid INT,
  name VARCHAR,
  citystate VARCHAR,
  attractionType VARCHAR,
  CONSTRAINT fk_tripid
  FOREIGN KEY(tripid)
  REFERENCES usertrips(tripid)
);



INSERT INTO users(name, email, phoneNumber, password)
VALUES ('Test User', 'gothere@fake.com', '2104145466', 'password123');

INSERT INTO users(name, email, phoneNumber, password)
VALUES ('Jesse Perez', 'jesse@fake.com', '2104145466', 'password123');