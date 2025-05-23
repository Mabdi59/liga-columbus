BEGIN TRANSACTION;

-- =========================
-- DROP Existing Tables (Safe Order)
-- =========================
DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS tournaments;
DROP TABLE IF EXISTS users;

-- =========================
-- USERS
-- =========================
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL UNIQUE,
password_hash VARCHAR(200) NOT NULL,
role VARCHAR(50) NOT NULL
);

-- =========================
-- TOURNAMENTS
-- =========================
CREATE TABLE tournaments (
tournament_id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
season VARCHAR(50),
category VARCHAR(50), -- Men's, Women's, Youth, etc.
is_active BOOLEAN DEFAULT true
);

-- =========================
-- TEAMS
-- =========================
CREATE TABLE teams (
team_id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
coach VARCHAR(100),
group_name VARCHAR(10), -- e.g. Group A, B, etc.
tournament_id INTEGER REFERENCES tournaments(tournament_id) ON DELETE CASCADE
);

-- =========================
-- PLAYERS
-- =========================
CREATE TABLE players (
player_id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
position VARCHAR(50),
jersey_number INTEGER,
team_id INTEGER REFERENCES teams(team_id) ON DELETE CASCADE
);

-- =========================
-- MATCHES
-- =========================
CREATE TABLE matches (
match_id SERIAL PRIMARY KEY,
team_a_id INTEGER REFERENCES teams(team_id),
team_b_id INTEGER REFERENCES teams(team_id),
match_date DATE NOT NULL,
match_time TIME,
field VARCHAR(100),
tournament_id INTEGER REFERENCES tournaments(tournament_id) ON DELETE CASCADE,
score_team_a INTEGER,
score_team_b INTEGER
);

COMMIT TRANSACTION;
