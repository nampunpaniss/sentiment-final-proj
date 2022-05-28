import Vue from 'vue'
import Vuex from 'vuex'

import prediction from './modules/prediction.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    prediction
  },
});
