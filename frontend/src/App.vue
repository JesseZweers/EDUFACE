<template>
  <div class="flex flex-col min-h-screen bg-lightBlue text-edufaceBlue">
    <Header />
    <JobPage />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import JobPage from './components/JobPage.vue';

export default {
  components: {
    Header,
    Footer,
    JobPage,
  },
};
</script>
