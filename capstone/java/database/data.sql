BEGIN TRANSACTION;

-- =========================
-- USERS
-- =========================
-- Password: "password"
INSERT INTO users (username, password_hash, role)
VALUES
    ('user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'ROLE_USER'),
    ('admin', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'ROLE_ADMIN');

-- =========================
-- TOURNAMENTS
-- =========================
INSERT INTO tournaments (name, season, category, is_active)
VALUES
    ('Spring Championship', 'Spring 2025', 'Men', true),
    ('Youth League', 'Summer 2025', 'Youth', true);

-- =========================
-- TEAMS
-- =========================
INSERT INTO teams (name, coach, group_name, tournament_id)
VALUES
    ('Columbus FC', 'Coach James', 'A', 1),
    ('North Side United', 'Coach Maria', 'A', 1),
    ('South Stars', 'Coach Lee', 'B', 1),
    ('Future Juniors', 'Coach Alex', 'C', 2);

-- =========================
-- PLAYERS
-- =========================
INSERT INTO players (name, position, jersey_number, team_id)
VALUES
    ('David Kim', 'Midfielder', 10, 1),
    ('Luis Mendoza', 'Forward', 9, 1),
    ('Mark Lee', 'Defender', 5, 2),
    ('Ali Hassan', 'Goalkeeper', 1, 2),
    ('Emily Tran', 'Forward', 7, 4);

-- =========================
-- MATCHES
-- =========================
INSERT INTO matches (team_a_id, team_b_id, match_date, match_time, field, tournament_id, score_team_a, score_team_b)
VALUES
    (1, 2, '2025-06-15', '14:00', 'Field 1', 1, 2, 2),
    (3, 1, '2025-06-18', '16:00', 'Field 2', 1, 1, 3),
    (4, 4, '2025-06-20', '10:00', 'Youth Arena', 2, NULL, NULL); -- Placeholder match

COMMIT TRANSACTION;
