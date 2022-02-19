<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CvCurrentJob',
  props: {
  },
});
</script>

<template>
<div class="card">
    <div class="card__title">
        <span class="typing">.getCurrentJob() <div class="typing__border"></div></span>
    </div>
    <div class="card__content">
        <img src="@/assets/images/parlem-logo.svg" alt="">
        <p class="center">
          <b class="accent"> FrontEnd Lead & FullStack Dev </b>
          <br>
            Parlem Telecom
        </p>
        <div class="tech-list">
          <img src="@/assets/images/VUE.svg" alt="">
          <img src="@/assets/images/K8.svg" alt="">
          <img src="@/assets/images/DOTNET.svg" alt="">
        </div>
    </div>
    <div class="card__footer">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>
    </div>
</div>
</template>
<style scoped lang="scss" src="../Cv.scss"></style>