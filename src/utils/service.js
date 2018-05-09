import Request from './request'
import api from './api'

const request = new Request();

export function getTopicsData (params={}) {
  return request.apiGet(api.topics, params)
}

export function getB () {
  return request.apiGet(api.bb)
}
