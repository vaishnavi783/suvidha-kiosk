const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./suvidha.db", err => {
  if (err) console.error(err.message);
  else console.log("Connected to SUVIDHA database.");
});

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS complaints (
    id TEXT PRIMARY KEY,
    department TEXT,
    description TEXT,
    status TEXT,
    created_at TEXT
  )
`);

module.exports = db;
