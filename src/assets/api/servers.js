import fetch from '../common/js/fetch'

/**
 * 服务商列表
 * @param query
 * @returns {*}
 */
export function getServerCate (query) {
  return fetch({
    url: '/index/index/getServerCate',
    method: 'post',
    params: query
  })
}

/**
 * 服务商内容
 * @param query
 * @returns {*}
 */
export function getServerContent (query) {
  return fetch({
    url: '/index/index/getServerContent',
    method: 'post',
    params: query
  })
}

/**
 * 获取表单
 * @param query
 * @returns {*}
 */
export function getfrom (query) {
  return fetch({
    url: '/index/index/getfrom',
    method: 'post',
    params: query
  })
}

/**
 * 获取首页表单
 * @param query
 * @returns {*}
 */
export function getallfrom (query) {
  return fetch({
    url: '/index/index/getallfrom',
    method: 'post',
    params: query
  })
}

/**
 * 提交表单
 * @param query
 * @returns {*}
 */
export function addsmess (query) {
  return fetch({
    url: '/index/index/addsmess',
    method: 'post',
    params: query
  })
}
