import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex);

const state = {
  topics: [],
  b: []
};

const mutations = {
  TOPICS_LIST: (state, data) => {
    state.topics = data
  },
  B: (state, data) => {
    state.b = data
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
})
