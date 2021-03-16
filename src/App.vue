<template>
  <router-view  class="no-js"/>
</template>

<script>

</script>

<style>
/*Transition*/
.transition{
  animation-name: transition-explore;
  animation-duration: 0.3s;
}
@keyframes transition-explore {
  from {
    transform: translateY(20px);
    opacity: 0;

  }
  /*to {
    transform: translateY(0);
    opacity: 100;
  }*/
}
</style>

