import request from './request'
import api from './api'

const { topics } = api

export function getTopicsData ({ params, cb }) {
  return request.apiGet(topics, params || {}).then(res => {
    cb(res)
  })
}
