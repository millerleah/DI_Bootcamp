-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
-- ('Matt','Damon','08/10/1970', 5),
-- ('George','Clooney','06/05/1961', 2)


-- SELECT * FROM actors

-- Daily Challenge :
-- Instructions

-- 1. Count how many actors are in the table.

-- SELECT COUNT(*) FROM actors

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

-- INSERT INTO products (first_name,last_name) VALUES ('Keren',)

-- Returns error:
-- ERROR:  syntax error at or near ")"
-- LINE 25: ...NSERT INTO products (first_name,last_name) VALUES ('Keren',)





