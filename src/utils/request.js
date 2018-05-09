import request from 'axios'
import qs from 'qs'

export default class Request {
  constructor() {
    request.defaults.params = {
    };
    request.defaults.timeout = 30 * 1000;
    request.defaults.validateStatus = status => {
      return status >= 200 && status < 300
    };
    // 赋予内部
    this.instance = request
  }

  apiGet(url, params={}) {
    return new Promise((resolve, reject) => {
      this.instance.get(url, { params }).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  apiPost(url, params={}) {
    return new Promise((resolve, reject) => {
      this.instance.post(url, qs.stringify(params)).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
