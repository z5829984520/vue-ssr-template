import { getTopicsData, getB } from '../utils/service'

export const getTopics = ({ commit }) => {
  return getTopicsData().then(data => commit('TOPICS_LIST', data))
};

export const getBList = ({ commit }) => {
  return getB().then(data => commit('B', data))
};

