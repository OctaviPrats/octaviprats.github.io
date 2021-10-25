<template>
  <div class="header">
      <div class="header__item">
          <span><b>new</b> OctaviPratsReig()</span>
      </div>
      <div class="header__item header__item--menu">
          <span>.aboutMe()</span>
          <span class="header__item--menu__active">.curriculumVitae()</span>
          <span>.projects()</span>
          <span>.blog()</span>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/@Theme/_colors.scss';
.header {
    padding: 10px;
    display: flex;
    justify-content: space-between;


    &__item{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-end;
        align-items: flex-end;

        span {
            padding: 7px 10px;
            white-space: nowrap;
            transition: all 0.2s;
        }
        b {
            color: $color_primary;
        }
        &--menu {
            span:hover {
                cursor: pointer;
                color: $color_primary;
            }
            &__active {
                color: $color_primary;
            }
        }
    }
}
</style>
