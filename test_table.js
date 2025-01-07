const sqlite3 = require('sqlite3').verbose();

// Open the database
const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
        return;
    }
    console.log("Connected to the database.");
});

// Query the table schema using PRAGMA
db.all(`PRAGMA table_info(userPreferences);`, (err, rows) => {
    if (err) {
        console.error("Error retrieving table details:", err.message);
    } else if (rows.length > 0) {
        console.log("Table 'userPreferences' details:");
        rows.forEach((row) => {
            console.log(`Column: ${row.name}, Type: ${row.type}, Nullable: ${row.notnull ? "No" : "Yes"}`);
        });
    } else {
        console.log("Table 'userPreferences' does not exist.");
    }
});

// Close the database
db.close((err) => {
    if (err) {
        console.error("Error closing database:", err.message);
    }
    console.log("Database connection closed.");
});
