<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue'
import ServerComponent from '@/components/ServerComponent.vue'
import LetterComponent from '@/components/LetterComponent.vue'

onMounted(() => {
  animateMessaging()
  window.addEventListener('resize', animateMessaging)
})

function animateMessaging() {
  const letter = document.querySelector('.letter')
  const serverTwo = document.querySelector('.two')

  if (serverTwo === null || letter === null) {
    return
  }

  const serverTwoPosition = serverTwo.getBoundingClientRect()
  const letterPosition = letter.getBoundingClientRect()
  const translateXForLetter = serverTwoPosition.x - letterPosition.x - serverTwoPosition.width

  anime({
    targets: letter,
    translateX: translateXForLetter,
    delay: function (el, i) {
      return i * 100
    },
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  })
}
</script>

<template>
  <div class="scene">
    <ServerComponent class="one" />
    <LetterComponent class="letter" />
    <ServerComponent class="two" />
  </div>
</template>

<style scoped>
.scene {
  width: 60vw;
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