import fetch from '../common/js/fetch'

/**
 * 新闻列表
 * @param query
 * @returns {*}
 */
export function getallnews (query) {
  return fetch({
    url: '/index/index/getallnews',
    method: 'post',
    params: query
  })
}

/**
 * 新闻内容
 * @param query
 * @returns {*}
 */
export function getnewscontent (query) {
  return fetch({
    url: '/index/index/getnewscontent',
    method: 'post',
    params: query
  })
}
