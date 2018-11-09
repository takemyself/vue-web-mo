import fetch from '../common/js/fetch'

/**
 * 获取验证码
 * @param query
 * @returns {*}
 */
export function getCode (query) {
  return fetch({
    url: '/index/regis/getCode',
    method: 'post',
    params: query
  })
}
