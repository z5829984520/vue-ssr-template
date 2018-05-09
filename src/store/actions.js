import { getTopicsData } from '../utils/service'

export const getTopics = ({ commit }) => {
  return getTopicsData().then(data => commit('TOPICS_LIST', data))
};

