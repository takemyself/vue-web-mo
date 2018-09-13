<template>
  <div>
    <div class="center_out">
      <div class="center_content">
        <div class="center_nav">
          <router-link to="/">首页</router-link>
          <router-link to="">&gt;</router-link>
          <router-link to="">会员中心</router-link>
        </div>
        <div class="center_left">
          <Master></Master>
        </div>
        <div class="center_right">
          <div class="personal_title">
            <img src="../../assets/mast/edit.png" alt="">
            <span>编辑个人资料</span>
          </div>
          <div class="personal_content">
            <div class="personal_items">
              <span>登录账号</span>
              <span>135****5555</span>
            </div>
            <div class="personal_items">
              <span>邮箱地址</span>
              <input type="text">
            </div>
            <div class="personal_items">
              <span>真实姓名</span>
              <input type="text">
            </div>
            <div class="personal_items">
              <span>手机号码</span>
              <input type="text">
            </div>
            <div class="personal_items">
              <span>性别</span>
              <div class="personal_sex">
                <input type="radio"> 男&nbsp;&nbsp;
                <input type="radio"> 女
              </div>
            </div>
            <div class="personal_items">
              <span>所在地区</span>
              <div class="personal_address" @click="sta=!sta">
                <div class="personal_addtop">上海市</div>
                <div class="personal_addsel" v-if="sta">
                  <p>上海市</p>
                  <p>上海市</p>
                  <p>上海市</p>
                  <p>上海市</p>
                  <p>上海市</p>
                </div>
              </div>
            </div>
            <div class="personal_sub">
              保 存
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Master from './Master'
export default {
  name: 'Person',
  data () {
    return {
      sta: false
    }
  },
  components: {
    Master
  }
}
</script>
<style scoped>
  .center_out{
    width: 100%;
    min-width: 1200px;
    background: #f6f6f6;
    overflow: hidden;
  }
  .center_content{
    width: 1200px;
    margin: 0 auto 50px;
    overflow: hidden;
  }
  .center_nav{
    width: 100%;
    overflow: hidden;
  }
  .center_nav>a{
    display: inline-block;
    line-height: 60px;
    color: #999;
    font-size: 14px;
  }
  .center_left{
    width: 270px;
    height: 832px;
    float: left;
    background: white;
    overflow: hidden;
  }
  .center_right{
    width: 900px;
    height: 832px;
    float: right;
    background: white;
  }
  .personal_title{
    width: 100%;
    padding-right: 30px;
    line-height: 100px;
    color: #999;
    overflow: hidden;
    text-align: right;
    font-size: 18px;
  }
  .personal_title *{
    display: inline-block;
    vertical-align: middle;
  }
  .personal_content{
    width: 370px;
    margin: 50px auto;
    overflow: hidden;
  }
  .personal_items{
    width: 100%;
    height: 34px;
    margin-top: 20px;
  }
  .personal_items>span{
    display: block;
    width: 80px;
    float: left;
    color: #666;
    line-height: 34px;
  }
  .personal_items>span:nth-of-type(2){
    width: 290px;
  }
  .personal_items>input{
    display: block;
    width: 290px;
    height: 34px;
    padding-left: 5px;
    float: right;
    border: 1px solid #ccc;
  }
  .personal_sex{
    line-height: 34px;
    width: 290px;
    float: right;
  }
  .personal_address{
    float: left;
    width: 134px;
    border: 1px solid #ccc;
    position: relative;
    cursor: pointer;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .personal_address:after{
    display: block;
    width: 15px;
    height: 15px;
    content: "";
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
    transform: rotate(45deg);
    position: absolute;
    right: 7px;
    top: 5px;
  }
  .personal_addtop{
    width: 100px;
    line-height: 34px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .personal_addsel{
    width: 100%;
    line-height: 34px;
    text-align: center;
    position: absolute;
    top: 34px;
    left: -1px;
  }
  .personal_addsel>p{
    width: 134px;
    border: 1px solid #ccc;
    border-bottom: none;
    background: white;
  }
  .personal_sub{
    width: 200px;
    line-height: 55px;
    background: #4f7fb6;
    text-align: center;
    margin: 130px auto;
    cursor: pointer;
    color: white;
    overflow: hidden;
  }
</style>
