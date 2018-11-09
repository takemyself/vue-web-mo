import fetch from '../common/js/fetch'

/**
 * 判断电脑手机
 * @param query
 * @returns {*}
 */
export function ispc (query) {
  return fetch({
    url: '/index/index/ispc',
    method: 'post',
    params: query
  })
}
