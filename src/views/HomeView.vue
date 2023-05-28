<script lang="ts" setup>
import InProgressComponent from '@/components/InProgressComponent.vue'
import SceneComponent from '@/components/SceneComponent.vue'
</script>

<template>
  <div class="wrapper">
    <InProgressComponent />
    <SceneComponent />
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>