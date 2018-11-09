<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import {ispc} from './assets/api/ispc'
export default {
  name: 'App',
  mounted () {
    /* eslint-disable */
    let dev_pro = process.env.NODE_ENV
    if (dev_pro == 'production') {
      this.$store.commit('changeimg','http://api.qyfw24.com/uploads/')
    }
//    ispc().then(res => {
//      let ispc = res.data
//      if (ispc) {
//        let history_router = this.$router.currentRoute.fullPath
//        window.location = 'http://qyfw24.com' + history_router
//      }
//    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 100px 0 100px 0;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
input{
  outline: none;
  background: none;
  border: none;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
</style>
