const fs = require('fs');
const path = require('path');
const dbClient = require('../db/dbClient'); 

const schemaPath = path.join(__dirname, '../db/schema.sql');

fs.readFile(schemaPath, 'utf8', (err, schema) => {
    if (err) {
        console.error('Error reading schema file:', err.message);
        process.exit(1);
    }

    dbClient.run(schema)
        .then(() => {
            console.log('Database schema initialized successfully.');
            process.exit(0);
        })
        .catch((err) => {
            console.error('Error initializing database schema:', err.message);
            process.exit(1);
        });
});
