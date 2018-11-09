import fetch from '../common/js/fetch'

/**
 * 轮播图列表
 * @param {*} query
 */
export function swiperimgs (query) {
  return fetch({
    url: '/index/index/lunbo',
    method: 'post',
    params: query
  })
}

/**
 * 分类列表
 * @param query
 * @returns {*}
 */
export function category (query) {
  return fetch({
    url: '/index/index/category',
    method: 'post',
    params: query
  })
}

/**
 * 找供应商
 * @param query
 * @returns {*}
 */
export function supplier (query) {
  return fetch({
    url: '/index/index/category',
    method: 'post',
    params: query
  })
}

/**
 * 服务优势
 * @param query
 * @returns {*}
 */
export function servers (query) {
  return fetch({
    url: '/index/index/servers',
    method: 'post',
    params: query
  })
}

/**
 * 友情链接
 * @param query
 * @returns {*}
 */
export function firendship (query) {
  return fetch({
    url: '/index/index/firendship',
    method: 'post',
    params: query
  })
}

/**
 * 新闻资讯
 * @param query
 * @returns {*}
 */
export function getnews (query) {
  return fetch({
    url: '/index/index/getnews',
    method: 'post',
    params: query
  })
}

/**
 * 获取logo & 信息
 * @param query
 * @returns {*}
 */
export function getlogos (query) {
  return fetch({
    url: '/index/index/getlogos',
    method: 'post',
    params: query
  })
}
