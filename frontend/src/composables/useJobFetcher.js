import { ref, onMounted } from 'vue';
import { fetchJobs } from '@/services/api';

export function useJobFetcher() {
  const jobs = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const loadJobs = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetchJobs();
      jobs.value = response.data.data;
    } catch (err) {
      console.error('Error fetching jobs:', err.message);
      error.value = 'Failed to load jobs. Please try again later.';
    } finally {
      loading.value = false;
    }
  };

  onMounted(loadJobs);

  return {
    jobs,
    loading,
    error,
  };
}
