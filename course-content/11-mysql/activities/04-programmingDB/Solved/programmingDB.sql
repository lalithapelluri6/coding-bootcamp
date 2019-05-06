-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  language VARCHAR(20),
  rating INTEGER(11),
  -- Creates a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN DEFAULT true,
  PRIMARY KEY (id)
);

-- Creates new rows
INSERT INTO programming_languages (language, rating)
VALUES ("HTML", 95);

INSERT INTO programming_languages (language, rating)
VALUES ("JS", 99);

INSERT INTO programming_languages (language, rating)
VALUES ("JQuery", 98);

INSERT INTO programming_languages (language, rating)
VALUES ("MySQL", 70);


CREATE TABLE programmers(
  id INTEGER NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  rating INTEGER(100),
  PRIMARY KEY (id)
);

-- Create new example rows
INSERT INTO programmers(firstName, lastName, rating)
VALUES ("Sandy", "Cheeks", 75);

INSERT INTO programmers(firstName, lastName, rating)
VALUES ("Squilliam", "Fancyson", 99);

INSERT INTO programmers(firstName, lastName)
VALUES ("Gary", "Squarepants");

SELECT firstName FROM programmers;








VALUES ("Javascript", 85, false);

INSERT INTO programming_languages(language, rating)
VALUES ("HolyC", 100);

INSERT INTO programming_languages(language, rating, mastered)
VALUES ("Python", 50, false);
Collapse




