CREATE TABLE fighters (
  id SERIAL PRIMARY KEY,
  username varchar NOT NULL,
  wins INT NOT NULL,
  losses INT NOT NULL,
  draws INT NOT NULL
);