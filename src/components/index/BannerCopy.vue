<template>
  <div>
    <div class="banner_out">
      <div class="banner_content">
        <div class="banner_left">
          <ul>
            <li class="nav_top" v-for="(v, k) in cate" :key="v.id" @click="cateShow(k)">
              <div class="nav_cate">{{ v.cname }}</div>
              <div class="nav_zhe">
                <transition name="bounce">
                  <div class="nav_content" v-if="v.sta">
                    <router-link to="/">11</router-link>
                    <router-link to="/">11</router-link>
                    <router-link to="/">11</router-link>
                    <router-link to="/">11</router-link>
                  </div>
                </transition>
              </div>
            </li>
          </ul>
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
        {cname: '紧急救助', sta: false}
      ],
      cateSta: -1
    }
  },
  methods: {
    cateShow: function (v) {
      this.cate[v].sta = !this.cate[v].sta
      if (this.cateSta > -1 && this.cateSta !== v) {
        this.cate[this.cateSta].sta = 0
      }
      if (this.cate[v].sta === true) {
        this.cateSta = v
      }
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
.nav_top{
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: white;
}
.nav_cate{
  float: left;
  line-height: 50px;
}
.nav_top:after{
  width: 6px;
  height: 6px;
  content: "";
  position: absolute;
  top: 15px;
  right: 3px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  transform: rotate(-45deg);
}
.nav_zhe{
  width: 100%;
  overflow: hidden;
}
.nav_content{
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 0 30px;
  /*margin-top: -100%;*/
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
