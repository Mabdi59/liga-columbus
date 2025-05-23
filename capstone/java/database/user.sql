-- ********************************************************************************
-- This script creates the database users and grants them the necessary permissions
-- ********************************************************************************

-- Create owner-level user for full schema access (e.g., PGAdmin use)
CREATE USER liga_owner
WITH PASSWORD 'ligapassword';

GRANT ALL
ON ALL TABLES IN SCHEMA public
  TO liga_owner;

GRANT ALL
ON ALL SEQUENCES IN SCHEMA public
  TO liga_owner;

-- Create restricted app-level user for use in application runtime
CREATE USER liga_appuser
WITH PASSWORD 'ligapassword';

GRANT SELECT, INSERT, UPDATE, DELETE
ON ALL TABLES IN SCHEMA public
TO liga_appuser;

GRANT USAGE, SELECT
ON ALL SEQUENCES IN SCHEMA public
TO liga_appuser;
