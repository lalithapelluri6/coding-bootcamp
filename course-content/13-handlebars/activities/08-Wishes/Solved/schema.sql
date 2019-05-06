-- Create the database wishes_db and specified it for use.
CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table wishes.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('Melanie wants to read minds.');
INSERT INTO wishes (wish) VALUES ('Cyrus wins the lottery.');
INSERT INTO wishes (wish) VALUES ('Sophie wishes for a room full of kittens.');
