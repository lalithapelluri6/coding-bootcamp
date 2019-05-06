-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;
-- Make it so all of the following code will affect favorite_db --
USE favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(50) NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER(100)
);
CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(100) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(100) NOT NULL,
  -- Make an integer column called "score" --
  score INTEGER(100)
);
CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(100) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN NOT NULL,
  -- Make an integer column called "score" --
  score INTEGER(100)
  -- Set the primary key of the table to id --
);
INSERT INTO favorite_foods (food, score)
VALUES ("Lobster", 95);
INSERT INTO favorite_songs (song, artist, score)
VALUES ("Friday", "Rebecca Black", 100);
INSERT INTO favorite_songs (song, artist, score)
VALUES ("Best Song Ever", "Jon Lajoie", 95);
INSERT INTO favorite_songs (song, artist, score)
VALUES ("Ya ochen rad, ved ya, nakonets, vozvrashchajus domoy", "Eduard Khil", 100);
INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Epic Movie", FALSE, 98);
INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Alvin and the Chipmunks: The Squeakquel", TRUE, 99);
INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Plan 9 from Outer Space", true, 100);
INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("The Room", true, 100);