import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const fetchJobs = () => api.get('/fetch-jobs');

export const saveJob = (job) => api.post('/save-job', job);

export default api;
