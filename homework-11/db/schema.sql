-- Drops database if it already exists 
DROP DATABASE IF EXISTS burgers_db;
-- Creates a new database called burgers_db and specifies it for use
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0
);

