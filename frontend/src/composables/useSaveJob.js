import { ref } from 'vue';
import { saveJob } from '@/services/api';

export function useSaveJob() {
  const saving = ref(false);
  const error = ref(null);

  const saveToDatabase = async (job) => {
    saving.value = true;
    error.value = null;

    try {
      const response = await saveJob(job);
      if (response.status === 201) {
        alert('Job saved successfully!');
      }
    } catch (err) {
      if (err.response?.status === 409) {
        alert('This job is already saved in the database.');
      } else {
        console.error('Error saving job:', err.message);
        error.value = 'Failed to save the job. Please try again.';
        alert(error.value);
      }
    } finally {
      saving.value = false;
    }
  };

  return {
    saveToDatabase,
    saving,
    error,
  };
}
