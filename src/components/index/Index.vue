<template>
  <div>
    <Banner></Banner>
    <Cate :msg="msg"></Cate>
    <Cont :msg="msg"></Cont>
  </div>
</template>
<script>
import Banner from './Banner'
import Cate from './Cate'
import Cont from './Cont'
import {category} from '../../assets/api/indexs'
export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    category().then(res => {
      this.msg = res.data
    })
  },
  components: {
    Banner,
    Cate,
    Cont
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
