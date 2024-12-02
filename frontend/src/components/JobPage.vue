<template>
  <div class="flex-1">
    <section class="text-center py-12 mt-4 bg-lightBlue">
      <h2 class="text-4xl font-extrabold">
        Sluit je aan bij het <span class="text-edufaceGreen">Eduface Team</span>
      </h2>
    </section>

    <div class="container mx-auto py-6 flex justify-center space-x-4">
      <button
        @click="displayMode = 'native'"
        :class="buttonClass(displayMode === 'native')"
      >
        View Natively
      </button>
      <button
        @click="displayMode = 'iframe'"
        :class="buttonClass(displayMode === 'iframe')"
      >
        View in Iframe
      </button>
    </div>

    <main class="container mx-auto py-12">
      <iframe
        v-if="displayMode === 'iframe'"
        src="/job-list"
        class="w-full h-[500px] border-0 shadow-md"
        title="Job List"
      ></iframe>

      <JobList v-else />
    </main>
  </div>
</template>

<script>
import JobList from './JobList.vue';

export default {
  components: {
    JobList,
  },
  data() {
    return {
      displayMode: 'native',
    };
  },
  methods: {
    buttonClass(isActive) {
      return isActive
        ? 'bg-edufaceGreen text-white font-bold rounded px-4 py-2'
        : 'bg-gray-200 text-gray-600 font-medium rounded px-4 py-2 hover:bg-gray-300';
    },
  },
};
</script>
