<template>
  <div>
    <Banner></Banner>
    <Cate></Cate>
    <About></About>
    <Contents></Contents>
  </div>
</template>
<script>
import Banner from './Banner'
import Cate from '../common/Cate'
import About from './About'
import Contents from './Contents'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Banner,
    Cate,
    About,
    Contents
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
