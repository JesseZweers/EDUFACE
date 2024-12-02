 <template>
    <div class="container mx-auto py-12">
      <div v-if="loading" class="text-center text-gray-600">Loading...</div>
  
      <div v-else-if="error" class="text-red-500 text-center">
        Error: {{ error }}
      </div>
  
      <div v-else class="space-y-8">
        <JobCard
          v-for="job in jobs"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </template>
  
  <script>
  import JobCard from './JobCard.vue';
  import { useJobFetcher } from '@/composables/useJobFetcher';
  
  export default {
    components: {
      JobCard,
    },
    setup() {
      const { jobs, loading, error } = useJobFetcher();
  
      return {
        jobs,
        loading,
        error,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  