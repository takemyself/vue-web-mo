<template>
  <div class="center">
    <Userbg></Userbg>
    <div class="center_mess">
      <router-link to="/person/Personmess">
        <span>个人资料</span>
      </router-link>
      <router-link to="/repass/index">
        <span>修改密码</span>
      </router-link>
      <router-link to="/shopcar">
        <span>购物车</span>
      </router-link>
      <router-link to="">
        <span>我的订单</span>
      </router-link>
      <router-link to="/persons/address">
        <span>收货地址</span>
      </router-link>
      <router-link to="">
        <span>积分管理</span>
      </router-link>
      <router-link to="">
        <span>退货管理</span>
      </router-link>
      <router-link to="/persons/popu">
        <span>我的推广</span>
      </router-link>
      <router-link to="">
        <span>常见问题</span>
      </router-link>
    </div>
    <div class="center_login_out">
      退出登录
    </div>
  </div>
</template>
<script>
import Userbg from './Userbg'
export default {
  name: 'Center',
  components: {
    Userbg
  }
}
</script>
<style scoped="center">
  .center_mess{
    width: 100%;
    background: white;
    overflow: hidden;
  }
  .center_mess>a{
    display: block;
    padding: 28px 30px;
    width: 100%;
    font-size: 32px;
    color: black;
    border-bottom: 1px solid #eee;
    position: relative;
    overflow: hidden;
  }
  .center_mess>a:after{
    display: block;
    width: 30px;
    height: 30px;
    content: "";
    border-bottom: 5px solid #999;
    border-right: 5px solid #999;
    position: absolute;
    right: 30px;
    top: 30px;
    transform: rotate(-45deg);
  }
  .center_login_out{
    width: 150px;
    text-align: center;
    font-size: 32px;
    line-height: 50px;
    margin: 92px auto;
    border-bottom: 1px solid black;
  }
</style>
