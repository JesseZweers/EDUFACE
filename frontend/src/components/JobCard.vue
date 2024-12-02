<template>
    <div class="bg-white shadow-md rounded-lg p-6 flex justify-between items-center space-x-4">
      <div>
        <h3 class="text-2xl font-bold text-edufaceBlue py-2">{{ job.title }}</h3>
        <p class="text-gray-500">{{ job.cta }}</p>
        <button
          @click="handleSave"
          class="bg-edufaceGreen text-white font-semibold rounded-[20px] mt-8 px-8 py-2 text-sm"
        >
          Save to database
        </button>
      </div>
      <div class="text-left space-y-3 min-w-48 border-l-2 border-lightBlue pl-4 font-normal">
        <p><span class="text-edufaceGreen">📍</span> {{ job.location }}</p>
        <p><span class="text-edufaceGreen">⏰</span> {{ job.hours }} uur</p>
        <p><span class="text-edufaceGreen">💶</span> €{{ job.salary }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useSaveJob } from '@/composables/useSaveJob';
  
  export default {
    props: {
      job: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const { saveToDatabase } = useSaveJob();
  
      const handleSave = async () => {
        await saveToDatabase(props.job);
      };
  
      return {
        handleSave,
      };
    },
  };
  </script>
  