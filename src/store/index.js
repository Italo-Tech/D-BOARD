import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    /**/
    isCog: false,

    dBoard: false,
    isExplore: false,

    isApps: false,

    isMenu: false,
    isMenu1: false,
    isMenu2: false,
    isMenu3: false,

    isDemos: false,

    isNation: false,
    isCube: false,

    isProjectStatus: false,
    isProfile: false,
    isSettings: false,
    isConversions: false,
    isConversions2: false,
    isUIElement: false,
  },
  mutations: {

  },
  actions: {
    /*Modais NavBar*/
    nation() {
      this.state.isNation = !this.state.isNation
      this.state.isCube = false
      this.state.isProjectStatus = false
      this.state.isProfile = false
    },
    cube() {
      this.state.isNation = false
      this.state.isCube = !this.state.isCube
      this.state.isProjectStatus = false
      this.state.isProfile = false
    },
    projectStatus() {
      this.state.isNation = false
      this.state.isCube = false
      this.state.isProjectStatus = !this.state.isProjectStatus
      this.state.isProfile = false
    },
    profile() {
      this.state.isNation = false
      this.state.isCube = false
      this.state.isProjectStatus = false
      this.state.isProfile = !this.state.isProfile
    },

    /*Abre/Fecha -> SettingsRight*/
    settingsRight() {
      this.state.isSettings = !this.state.isSettings;
    }
  },
  modules: {
  }
})
