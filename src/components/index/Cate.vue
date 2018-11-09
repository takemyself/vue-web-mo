<template>
  <div class="cate">
    <ul>
      <li v-for="(items,keys) in msg" :key="keys" v-if="keys<7">
        <router-link :to="{path:'/server/company/'+items.cid}">
          <img v-lazy="$store.state.headTitle.imgurl + items.mpic" alt="">
          <span>{{items.cname}}</span>
        </router-link>
      </li>
      <li>
        <img src="../../assets/mast/cate.png" alt="">
        <span>查看更多</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Cate',
  data () {
    return {
    }
  },
  props: ['msg']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cate{
    width: 100%;
    overflow: hidden;
  }
  .cate li{
    width: 25%;
    margin-top: 30px;
    float: left;
  }
  .cate li img{
    display: block;
    width: 128px;
    margin: 0 auto;
  }
  .cate li span{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: black;
  }
</style>
