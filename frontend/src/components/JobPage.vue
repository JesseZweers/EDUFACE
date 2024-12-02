<template>
    <div class="flex-1">
      <section class="text-center py-12 mt-4 bg-lightBlue">
        <h2 class="text-4xl font-extrabold">
          Sluit je aan bij het <span class="text-edufaceGreen">Eduface Team</span>
        </h2>
      </section>
  
      <main class="container mx-auto py-12">
        <JobList />
      </main>
    </div>
  </template>
  
  <script>
  import JobList from './JobList.vue';
  
  export default {
    components: {
      JobList,
    },
  };
  </script>
  