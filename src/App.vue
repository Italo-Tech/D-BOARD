<template>
  <div id="app">
    <div class="bg-white w-full min-w-min h-screen min-h-full p-0 m-0 relative">
      <div class="font-sans antialiased text-sm disable-scrollbars w-full text-gray-900 bg-white" data-layout="layout-1" data-collapsed="false" data-navbar="light" data-left-sidebar="light">

        <!--SETTINGS RIGHT-->
        <SettingsRight v-show="this.$store.state.isSettings" :class="this.$store.state.isSettings ? 'trs-right-to-left' : 'settings-leave-active'" />

        <div class="wrapper">
          <!--D-BOARD LEFT-->
          <BoardLeft />

          <!--MAIN-->
          <div class="main w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
            <!--NAVBAR-->
            <NavBar />
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SettingsRight from "./components/global/SettingsRight";
import NavBar from "./components/global/NavBar";
import BoardLeft from "./components/global/BoardLeft";

export default {
  name: 'App',
  components: {BoardLeft, NavBar, SettingsRight},
  data() {
    return {
      state: {
        chartData: {},
        chartOptions: {
          responsive: true
        },
      },
    }
  },
  computed: {
      ...mapState([
        'dBoard','isCog','isSettings','isConversions','isConversions2'
      ]),
  },
  beforeMount () {
    this.fillData()
  },

  methods: {
    ...mapActions([
        'settingsRight'
    ]),
    fillData () {
      this.chartData = {
        labels: ['label 1', 'Label 2'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (10 - 5 + 1)) + 10
    },
  },
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

