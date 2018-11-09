import fetch from '../common/js/fetch'

export function getinro (query) {
  return fetch({
    url: '/index/index/getlogos',
    method: 'post',
    params: query
  })
}
