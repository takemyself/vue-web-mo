<template>
  <div class="shop">
    <div class="good_cate">
      <vue-tabbar-slide :options="options" @callback="getparms"></vue-tabbar-slide>
    </div>
    <div class="good_cate good_adver">
      <router-link :to="{path:'/shop/goods/'+firRecommend.gid}">
        <!--<img src="../../assets/img/banner_shop.png" alt="">-->
        <img :src="$store.state.headTitle.imgurl+firRecommend.pic" alt="">
      </router-link>
    </div>
    <div class="shop_goods">
      <div class="good_cate good_adver">
        <router-link :to="{path:'/shop/goods/'+secRecommend.gid}">
          <img :src="$store.state.headTitle.imgurl+secRecommend.pic" alt="">
        </router-link>
      </div>
      <ul>
        <li class="good_items" v-for="v in data" :key="v.gid">
          <router-link :to="{path:'/shop/goods/'+v.gid}">
            <div class="good_img">
              <img v-lazy="$store.state.headTitle.imgurl + v.goodspic[0].pic" alt="">
            </div>
            <div class="good_title">
              {{v.gname}}
            </div>
            <div class="good_price">
              ¥{{v.level[0].lprice}}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getGoods, getCate, getCateGoods, getRecommend} from '../../assets/api/shops'
export default {
  name: 'Index',
  data () {
    return {
      options: {
        container: 'mySlide1',
        slideData: ['首页推荐'],
        slideId: ['0'],
        width: '80px',
        index: 0,
        color: '#929292',
        fontSize: '14px',
        checkedColor: 'black',
        downLineHeight: 'underline'
      },
      data: '',
      cate: '',
      firRecommend: '',
      secRecommend: ''
    }
  },
  mounted () {
    this.$store.commit('changename', '当日商城')
    this.getAllGoods()
    getCate().then(res => {
      let cate = res.data
      for (let i in cate) {
        this.options.slideData.push(cate[i]['cname'])
        this.options.slideId.push(cate[i]['cid'])
      }
    })
    getRecommend().then(res => {
      this.firRecommend = res.data[0]
      this.secRecommend = res.data[1]
    })
  },
  methods: {
    getAllGoods () {
      getGoods().then(res => {
        this.data = res.data
      })
    },
    getparms (event, index, val, id) {
      // eslint-disable-next-line
      if (id == 0) {
        this.getAllGoods()
      } else {
        let cid = {'cid': id}
        getCateGoods(cid).then(res => {
          this.data = res.data
        })
      }
    }
  }
}
</script>
<style>
  .swiper-wrapper{
    background: #eee;
  }
  .shop{
    width: 100%;
    overflow: hidden;
  }
  .good_cate{
    width: 100%;
    overflow: hidden;
  }
  .swiper-slide{
    background: #eee;
  }
  .good_adver img{
    display: block;
    width: 100%;
  }
  .shop_goods{
    width: 100%;
    padding: 0 30px;
    margin-top: 30px;
    overflow: hidden;
  }
  .shop_goods>ul{
    width: 100%;
    overflow: hidden;
  }
  .good_items{
    width: 330px;
    float: left;
    margin-top: 20px;
    margin-right: 30px;
    overflow: hidden;
  }
  .good_items:nth-of-type(2n){
    margin-right: 0;
  }
  .good_img{
    width: 100%;
    height: 296px;
    overflow: hidden;
  }
  .good_img>img{
    width: 100%;
  }
  .good_title{
    width: 100%;
    font-size: 28px;
    color: black;
    margin-top: 20px;
    overflow: hidden;
  }
  .good_price{
    width: 100%;
    font-size: 24px;
    color: #f34f22;
    margin-top: 20px;
    overflow: hidden;
  }
</style>
