<template>
  <div class="goods">
    <div class="goods_img">
      <img :src="$store.state.headTitle.imgurl + pic" alt="">
    </div>
    <div class="goods_title">
      {{mess.gname}}
    </div>
    <div class="goods_price">
      ¥{{price}}
    </div>
    <div class="goods_cate">
      <span v-for="vv in mess.level" :key="vv.id" @click="checkCate(vv)" v-bind:class="{act_span:vv.sta}">{{vv.lname}}</span>
    </div>
    <div class="goods_other">
      <span>快递：{{mess.ed}}元</span>
      <span>评论：55条</span>
      <router-link class="goods_recommend" to="">
        推荐
      </router-link>
    </div>
    <div class="goods_jifen">
      <span>积分</span>
      <span>购买可获得{{fen}}积分</span>
    </div>
    <div class="goods_ela">
      <div class="goods_ela_left">
        评论（55）
      </div>
      <div class="goods_ela_more">
        <router-link to="/shop/comment">
          查看更多&gt;
        </router-link>
      </div>
    </div>
    <div class="goods_mess">
      <div class="goods_user_img">
        <img src="../../assets/img/user_1.png" alt="">
      </div>
      <div class="goods_user_name">
        用户名
      </div>
      <div class="goods_user_mess">
        很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错
      </div>
    </div>
    <div class="goods_detail">
      商品详情
    </div>
    <div class="goods_content" v-html="mess.gcontent"></div>
    <div class="goods_box">
      <div class="goods_items goods_add">
        <span>
          <img src="../../assets/mast/buycar.png" alt="">
        </span>
        <span>加入购物车</span>
      </div>
      <div class="goods_items goods_buynow">
        立即购买
      </div>
    </div>
  </div>
</template>
<script>
import {getOneGoods} from '../../assets/api/shops'
export default {
  name: 'Goods',
  data () {
    return {
      gid: '',
      mess: '',
      price: '',
      pic: '',
      fen: ''
    }
  },
  mounted () {
    this.$store.commit('changename', '产品详情')
    this.gid = this.$router.params
    getOneGoods(this.gid).then(res => {
      this.mess = res.data
      this.price = res.data.level[0].lprice
      this.fen = res.data.level[0].fen
      this.pic = res.data.goodspic[0].pic
    })
  },
  methods: {
    checkCate (v) {
      for (let i in this.mess.level) {
        this.mess.level[i].sta = false
      }
      this.price = v.lprice
      this.fen = v.fen
      v.sta = !v.sta
    }
  }
}
</script>
<style scoped>
  .goods_box{
    width: 100%;
    background: black;
    height: 105px;
    position: fixed;
    left: 0;
    bottom: 100px;
    overflow: hidden;
  }
  .goods_items{
    width: 50%;
    float: left;
    overflow: hidden;
    color: white;
    text-align: center;
    font-size: 0px;
    line-height: 105px;
  }
  .goods_add>span{
    display: inline-block;
    padding: 0 5px;
    height: 105px;
    font-size: 42px;
    vertical-align: middle;
  }
  .goods_add>span>img{
    width: 50px;
    height: 50px;
    margin-top: 25px;
  }
  .goods_buynow{
    font-size: 42px;
    background: #1779bd;
  }
  .goods{
    width: 100%;
    padding-bottom: 100px;
    background: #eee;
    overflow: hidden;
  }
  .goods_img{
    width: 100%;
    overflow: hidden;
  }
  .goods_img>img{
    display: block;
    width: 100%;
  }
  .goods_title{
    background: white;
    width: 100%;
    padding: 20px 30px;
    font-size: 30px;
    overflow: hidden;
  }
  .goods_price{
    background: white;
    width: 100%;
    padding: 0 30px;
    font-size: 30px;
    color: #1779bd;
    overflow: hidden;
  }
  .goods_cate{
    width: 100%;
    background: white;
    padding: 10px 30px;
    overflow: hidden;
  }
  .goods_cate>span{
    display: inline-block;
    font-size: 28px;
    padding: 5px;
  }
  .goods_cate .act_span{
    color: #1f7ebf;
  }
  .goods_other{
    background: white;
    width: 100%;
    padding: 0 30px;
    height: 70px;
    position: relative;
  }
  .goods_other>span{
    display: block;
    float: left;
    font-size: 24px;
    color: #8e8e8e;
    line-height: 70px;
    margin-right: 106px;
    position: relative;
  }
  .goods_recommend{
    width: 140px;
    line-height: 60px;
    color: white;
    text-align: center;
    background: #1779bd;
    border-radius: 30px 0 0 30px;
    position: absolute;
    right: 0;
    bottom: 20px;
    overflow: hidden;
  }
  .goods_jifen{
    width: 100%;
    background: white;
    padding: 20px 30px;
    margin-top: 20px;
    overflow: hidden;
  }
  .goods_jifen>span{
    display: block;
    float: left;
    margin-right: 20px;
    font-size: 24px;
  }
  .goods_jifen>span:first-of-type{
    color: #f10303;
    padding: 0 10px;
    border-radius: 10px;
    border: 1px solid #f10303;
    overflow: hidden;
  }
  .goods_ela{
    width: 100%;
    background: white;
    padding: 20px 30px;
    margin-top: 20px;
    overflow: hidden;
  }
  .goods_ela_left{
    width: 50%;
    float: left;
    font-size: 24px;
  }
  .goods_ela_more{
    width: 50%;
    float: right;
    font-size: 26px;
    color: #1779bd;
    text-align: right;
  }
  .goods_mess{
    width: 100%;
    background: white;
    padding: 20px 30px;
    overflow: hidden;
  }
  .goods_user_img{
    width: 50px;
    height: 50px;
    float: left;
    border-radius: 50%;
    overflow: hidden;
  }
  .goods_user_img>img{
    display: block;
    width: 100%;
  }
  .goods_user_name{
    width: 100px;
    font-size: 24px;
    line-height: 50px;
    color: #777;
    float: left;
    margin-left: 20px;
  }
  .goods_user_mess{
    width: 100%;
    margin-top: 20px;
    font-size: 24px;
    color: #272727;
    float: left;
  }
  .goods_detail{
    width: 100%;
    padding: 20px 30px;
    text-align: center;
    font-size: 28px;
    color: #666;
    overflow: hidden;
  }
  .goods_content{
    width: 100%;
    background: white;
    padding: 20px 30px;
    overflow: hidden;
  }
</style>
