<script lang="ts">
import { defineComponent } from 'vue';
import CvStudies from './components/studies.vue'
import CvCurrentJob from './components/currentjob.vue'

export default defineComponent({
  name: 'Cv',
  components: {
    CvStudies,
    CvCurrentJob
  },
  props: {
  },
});
</script>

<template src="./Cv.html"></template>
<style scoped lang="scss" src="./Cv.scss"></style>