const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

/* In the PDF, the route was originally specified as /fetch-applications */
router.get('/fetch-jobs', jobController.fetchAllJobsFromMockApi);

/* In the PDF, the route was originally specified as /save-application */
router.post('/save-job', jobController.saveJobInDb);

module.exports = router;
