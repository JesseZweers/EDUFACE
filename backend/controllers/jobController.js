const JobService = require('../services/jobService');

exports.fetchAllJobsFromMockApi = async (req, res, next) => {
    try {
        const jobs = await JobService.fetchAllJobsFromMockApi();
        res.json({
            status: 'success',
            data: jobs
        });
    } catch (err) {
        console.error('Error fetching jobs:', err);
        next(err);
    }
};

exports.saveJobInDb = async (req, res, next) => {
    try {
        const jobId = await JobService.saveJobInDb(req.body);
        res.status(201).json({
            status: 'success',
            message: 'Job saved successfully',
            data: { id: jobId }
        });
    } catch (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(409).json({
                status: 'error',
                message: 'Job with this ID already exists'
            });
        }
        next(err);
    }
};