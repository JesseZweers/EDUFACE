const sqlite3 = require('sqlite3').verbose();
const config = require('../config/config');

class DbClient {
    constructor() {
        this.db = new sqlite3.Database(config.dbPath, (err) => {
            if (err) {
                console.error('Error connecting to the database:', err.message);
            } else {
                console.log('Connected to the SQLite database');
            }
        });
    }

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function(err) {
                if (err) reject(err);
                resolve(this);
            });
        });
    }
}

module.exports = new DbClient();