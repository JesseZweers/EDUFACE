const dbClient = require('../db/dbClient');

class Job {
    static async save({ id, title, cta, company, location, hours, salary }) {
        const result = await dbClient.run(
            `INSERT INTO jobs (id, title, cta, company, location, hours, salary)
             VALUES (?, ?, ?, ?, ?, ?, ?)
             ON CONFLICT(id) DO UPDATE SET
               title = excluded.title,
               cta = excluded.cta,
               company = excluded.company,
               location = excluded.location,
               hours = excluded.hours,
               salary = excluded.salary;`,
            [id, title, cta, company, location, hours, salary]
        );
        return result.lastID;
    }
}

module.exports = Job;