CREATE DATABASE gothere

CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(),
  city VARCHAR(),
  state VARCHAR(),
  email VARCHAR(),
  password VARCHAR(),
  favorites VARCHAR()
)