export default {
  state: {
    name: '未定义',
    imgurl: 'http://www.today.com/uploads/'
  },
  mutations: {
    changename (state, content) {
      state.name = content
    },
    changeimg (state, content) {
      state.imgurl = content
    }
  }
}
