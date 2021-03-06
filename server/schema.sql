DROP DATABASE IF EXISTS gothere;
CREATE DATABASE gothere;
\c gothere;

CREATE TABLE users (
  name VARCHAR(50) NOT NULL,
  email VARCHAR PRIMARY KEY,
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

CREATE TABLE favorites (
  favoritesid SERIAL PRIMARY KEY,
  email VARCHAR,
  name VARCHAR,
  citystate VARCHAR,
  favoritestype VARCHAR,
  CONSTRAINT fk_fav
  FOREIGN KEY(email)
  REFERENCES users(email)
);



INSERT INTO users(name, email, phoneNumber, password)
VALUES ('Test User', 'gothere@fake.com', '2104145466', 'password123');

INSERT INTO users(name, email, phoneNumber, password)
VALUES ('Terry Vacation', 'admin@gmail.com', '2104145466', 'password123');

INSERT INTO usertrips(email, startdate, enddate, destination, businesstrip)
VALUES ('gothere@fake.com', '11302020', '11302021', 'Tokyo', true);

INSERT INTO usertrips(email, startdate, enddate, destination, businesstrip)
VALUES('admin@gmail.com', '012021', '012521', 'Dallas, TX', 'false');

INSERT INTO attractions(tripid, name, citystate, attractiontype)
VALUES(1, 'Marriot Downtown', 'Dallas, TX', 'hotel');

INSERT INTO favorites(email, name, citystate, favoritestype)
VALUES('admin@gmail.com', 'McDonalds', 'Dallas, TX', 'Restaurant');