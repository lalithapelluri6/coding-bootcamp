/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS sanFrancisco;

/* Create database */
CREATE DATABASE sanFrancisco;
USE sanFrancisco;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE colleges (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);


