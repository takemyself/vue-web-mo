import fetch from '../common/js/fetch'

/**
 * 获取所有商品
 * @param query
 * @returns {*}
 */
export function getGoods (query) {
  return fetch({
    url: '/index/goods/getGoods',
    method: 'post',
    params: query
  })
}

/**
 * 获取所有分类
 * @param query
 * @returns {*}
 */
export function getCate (query) {
  return fetch({
    url: '/index/goods/getCate',
    method: 'post',
    params: query
  })
}

/**
 * 获取单个商品
 * @param query
 * @returns {*}
 */
export function getOneGoods (query) {
  return fetch({
    url: '/index/goods/getOneGoods',
    method: 'post',
    params: query
  })
}

/**
 * 获取分类商品
 * @param query
 * @returns {*}
 */
export function getCateGoods (query) {
  return fetch({
    url: '/index/goods/getCateGoods',
    method: 'post',
    params: query
  })
}

/**
 * 获取推荐商品
 * @param query
 * @returns {*}
 */
export function getRecommend (query) {
  return fetch({
    url: '/index/goods/getRecommend',
    method: 'post',
    params: query
  })
}
