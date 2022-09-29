CREATE DATABASE eats;

\c eats;

CREATE TABLE businesses (
  id VARCHAR(1000),
  name VARCHAR(255),
  image_url VARCHAR(1000),
  url VARCHAR(1000),
  rating NUMERIC,
  price VARCHAR(255),
  location VARCHAR(255)
);
