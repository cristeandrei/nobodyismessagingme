<script lang="ts" setup>
import Server from "/components/server.vue";
import anime from "animejs";

onMounted(() => {
  const letter = document.querySelector('.letter');
  const serverTwo = document.querySelector('.two');

  const serverTwoPosition = serverTwo.getBoundingClientRect();
  const translateXForLetter = serverTwoPosition.x - letter.x - serverTwoPosition.width;

  anime({
    targets: letter,
    translateX: translateXForLetter,
    delay: function (el, i) {
      return i * 100;
    },
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });
})

</script>

<template>
  <div class="scene">
    <server class="one"/>
    <letter class="letter"/>
    <server class="two"/>
  </div>
</template>

<style>
.scene {
  width: 500px;
  display: flex;
  justify-content: flex-start;
}

.letter {
}

.one {
}

.two {
  margin-left: auto;
}
</style>