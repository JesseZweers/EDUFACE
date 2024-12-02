const dbClient = require('../db/dbClient');

class Job {
    static async save({ id, title, cta, company, location, hours, salary }) {
        const result = await dbClient.run(
            `INSERT INTO jobs (id, title, cta, company, location, hours, salary)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [id, title, cta, company, location, hours, salary]
        );
        return result.lastID;
    }
}

module.exports = Job;