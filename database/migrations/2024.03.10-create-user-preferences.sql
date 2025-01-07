
--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE userPreferences (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId TEXT    NOT NULL,
  languageLevel TEXT    NOT NULL,
  objectives TEXT    NOT NULL,
  commitment TEXT    NOT NULL
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP INDEX userPreferences;
