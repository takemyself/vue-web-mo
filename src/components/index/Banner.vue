<template>
  <div>
    <div class="banner_out">
      <div class="banner_content">
        <div class="banner_left">
          <router-link to="/Recruit" v-for="v in cate" :key="v.id">{{ v.cname }}</router-link>
        </div>
        <div class="banner_right">
          <Lunbo></Lunbo>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Lunbo from './Lunbo'
export default {
  name: 'Banner',
  components: {
    Lunbo
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      cate: [
        {cname: '环保', sta: false},
        {cname: '养老', sta: false},
        {cname: '助学', sta: false},
        {cname: '助残', sta: false},
        {cname: '减震救灾', sta: false},
        {cname: '紧急救助', sta: false},
        {cname: '自闭症', sta: false},
        {cname: '物资捐赠', sta: false}
      ]
    }
  }
}
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    margin-top: -100%;
  }
  100% {
    margin-top: 0;
  }
}
.banner_out{
  width: 100%;
  background:#f6f6f6;
  overflow: hidden;
}
.banner_content{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.banner_left{
  width: 270px;
  float: left;
  border: 1px solid #ccc;
  border-top: none;
  background: white;
  padding: 0 20px;
}
.banner_left>a{
  display: block;
  width: 100%;
  line-height: 66px;
  color: black;
  position: relative;
}
.banner_left>a:after{
  width: 6px;
  height: 6px;
  content: "";
  position: absolute;
  top: 30px;
  right: 3px;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  transform: rotate(-45deg);
}
.nav_content>a{
  display: block;
  line-height: 38px;
}
.banner_right{
  width: 930px;
  float: right;
}
</style>
