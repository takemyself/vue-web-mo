import fetch from '../common/js/fetch'

/**
 * shop列表
 * @param {*} query
 */
export function test (query) {
  return fetch({
    url: '/index/index/index',
    method: 'get',
    params: query
  })
}
