import { getTopicsData } from '../utils/service'

export const getTopics = ({ commit }) => {
  return getTopicsData({
    cb: data => { commit('TOPICS_LIST', data) }
  })
}

