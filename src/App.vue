<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
}

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
}
/*Transition-right-to-left*/
.trs-right-to-left{
  animation: trs-right-to-left .5s;
}
@keyframes trs-right-to-left {
  from {
    transform: translatex(20px);
    opacity: 1;

  }
}
.trs-left-to-right {
  animation: trs-left-to-right .5s;
}
@keyframes trs-left-to-right {
  from {
    transform: translatex(-20px);
    opacity: 0;
  }
}
</style>

