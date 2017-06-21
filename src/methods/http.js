import axios from 'axios'

export function $http({ url, method = 'get', success, data = {} }){
  return axios({ method, url, params: data })
    .then(function(res) {
      return new Promise((resolve) => {
        success && success(res.data)
        resolve(res.data)
      })
    })
}
