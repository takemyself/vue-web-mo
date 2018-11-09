<template>
  <div class="bottom">
    <ul>
      <li>
        <router-link to="/">
          <img src="../../assets/mast/home.png" alt="">
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/shop">
          <img src="../../assets/mast/mshop.png" alt="">
          <span>商城</span>
        </router-link>
      </li>
      <li>
        <router-link to="/sub">
          <img src="../../assets/mast/wenjuan.png" alt="">
          <span>表单</span>
        </router-link>
      </li>
      <li>
        <router-link to="/login">
          <img src="../../assets/mast/user.png" alt="">
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Bottoms',
  data () {
    return {msg: 'Welcome to Your Vue.js App'}
  }
}
</script>

<style scoped>
  .bottom{
    width: 100%;
    height: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: rgba(255,255,255,0.9);
    border-top: 1px solid #ccc;
    overflow: hidden;
  }
  .bottom li{
    width: 25%;
    float: left;
  }
  .bottom img{
    display: block;
    height: 40px;
    line-height: 5px;
    margin: 15px auto 0;
  }
  .bottom span{
    display: block;
    margin: 10px auto;
    font-size: 22px;
    line-height: 22px;
    text-align: center;
    color: #929292;
  }
</style>
