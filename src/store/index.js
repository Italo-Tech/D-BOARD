import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    /**/
    isCog: false,

    dBoard: false,

    isSettings: false,
    isConversions: false,
    isConversions2: false,
  },
  mutations: {

  },
  actions: {
    /*Abre/Fecha -> SettingsRight*/
    settingsRight() {
      this.state.isSettings = !this.state.isSettings;
    },

    /*Abre/Fecha -> D-BOARD*/
    dashLeft() {
      this.state.dBoard = !this.state.dBoard;
    }
  },
  modules: {
  }
})
