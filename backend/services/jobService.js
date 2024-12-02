const fs = require('fs').promises;
const path = require('path');
const Job = require('../models/jobModel');
const config = require('../config/config');

class JobService {
    static async fetchAllJobsFromMockApi() {
        const filePath = path.join(__dirname, '..', config.apiJsonPath);
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    }

    static async saveJobInDb(jobData) {
        return await Job.save(jobData);
    }
}

module.exports = JobService;