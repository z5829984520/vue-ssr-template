import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  topics: []
}

const mutations = {
  TOPICS_LIST: (state, topics) => {
    state.topics = topics
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
