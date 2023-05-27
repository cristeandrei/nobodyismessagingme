<script lang="ts" setup>
import Scene from "~/components/scene.vue";
import InProgress from "~/components/inProgress.vue";
</script>

<template>
  <div class="wrapper">
    <in-progress/>
    <scene/>
  </div>
</template>

<style>
.wrapper {
  background-color: beige;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
