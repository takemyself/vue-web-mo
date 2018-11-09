<template>
  <div class="buycar">
    <div class="buycar_items">
      <div class="buy_check">
        <input type="checkbox" class="buy_checkbox">
      </div>
      <div class="buy_img">
        <img src="../../assets/img/shanping_3.png" alt="">
      </div>
      <div class="buy_content">
        <div class="buy_title">吹风机</div>
        <div class="buy_mess">
          运费：0.00
        </div>
        <div class="buy_prices">
          <div class="buy_price">
            价格：¥10.00元
          </div>
          <div class="buy_count">
            <span>＋</span>
            <span><input type="number" value="1"></span>
            <span>－</span>
          </div>
        </div>
      </div>
    </div>
    <div class="buycar_items">
      <div class="buy_check">
        <input type="checkbox" class="buy_checkbox">
      </div>
      <div class="buy_img">
        <img src="../../assets/img/shanping_3.png" alt="">
      </div>
      <div class="buy_content">
        <div class="buy_title">吹风机</div>
        <div class="buy_mess">
          运费：0.00
        </div>
        <div class="buy_prices">
          <div class="buy_price">
            价格：¥10.00元
          </div>
          <div class="buy_count">
            <span>＋</span>
            <span><input type="number" value="1"></span>
            <span>－</span>
          </div>
        </div>
      </div>
    </div>
    <div class="buy_all">
      <div class="all_check">
        <input type="checkbox">
        <span>全选</span>
      </div>
      <div class="buyall_price">
        总价：99.00元
      </div>
      <div class="buy_buy" @click="getorder()">
        结算
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Buycar',
  data () {
    return {
      num1: 1
    }
  },
  mounted () {
    this.$store.commit('changename', '购物车')
  },
  methods: {
    getorder () {
      this.$router.push({
        path: '/shopcar/order'
      })
    }
  }
}
</script>
<style scoped="buycar">
  .buy_all{
    width: 100%;
    padding-left: 30px;
    height: 130px;
    position: fixed;
    left: 0;
    bottom: 100px;
    background: white;
    overflow: hidden;
  }
  .all_check{
    width: 150px;
    text-align: center;
    line-height: 130px;
    font-size: 30px;
    float: left;
    color: #5e5e5e;
    vertical-align: middle;
  }
  .all_check>input{
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    margin-top: 35px;
  }
  .buyall_price{
    width: 300px;
    line-height: 130px;
    text-align: center;
    font-size: 32px;
    color: black;
    float: left;
  }
  .buy_buy{
    width: 212px;
    color: white;
    font-size: 48px;
    line-height: 130px;
    text-align: center;
    float: right;
    background: #0080cc;
    overflow: hidden;
  }
  .buycar{
    width: 100%;
    min-height: 1500px;
    background: #eee;
    overflow: hidden;
  }
  .buycar_items{
    width: 100%;
    padding: 20px 30px;
    background: white;
    margin-top: 20px;
    overflow: hidden;
  }
  .buy_check{
    width: 35px;
    float: left;
    position: relative;
  }
  .buy_checkbox{
    display: block;
    width: 35px;
    height: 35px;
    margin-top: 50px;
    overflow: hidden;
  }
  .buy_img{
    width: 140px;
    float: left;
    margin-left: 10px;
  }
  .buy_img>img{
    display: block;
    width: 100%;
  }
  .buy_content{
    width: 480px;
    float: right;
  }
  .buy_title{
    width: 100%;
    font-size: 30px;
    font-weight: 700;
  }
  .buy_mess{
    width: 100%;
    margin-top: 10px;
    font-size: 28px;
    color: #929292;
  }
  .buy_prices{
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
  }
  .buy_price{
    width: 50%;
    float: left;
    color: #fe1111;
    font-size: 24px;
  }
  .buy_count{
    width: 50%;
    float: right;
    font-size: 0;
  }
  .buy_count>span{
    display: block;
    float: right;
    width: 50px;
    text-align: center;
    font-size: 30px;
    border: 1px solid #909090;
    line-height: 50px;
    border-left: none;
  }
  .buy_count>span:last-of-type{
    border-left: 1px solid #909090;
  }
  .buy_count>span:nth-of-type(2){
    width: 100px;
  }
  .buy_count>span:nth-of-type(2)>input{
    display: block;
    width: 100%;
    line-height: 50px;
    text-align: center;
  }
</style>
