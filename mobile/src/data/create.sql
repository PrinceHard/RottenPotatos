CREATE DATABASE rotten;

CREATE TABLE serie(
  	id int NOT NULL AUTO_INCREMENT,
	title varchar(255),
  	released varchar(20),
  	genre varchar(255),
  	plot varchar(255),
  	poster varchar(255),
  	imdb_rating varchar(10),
  	PRIMARY KEY (id)
);