<template>
  <div>
    <div class="login_out">
      <div class="login_img">
        <img src="../../assets/mast/pro.jpg" alt="">
      </div>
      <div class="login_content">
        <div class="login_box">
          <ul>
            <li class="login_title">用户登录</li>
            <li class="login_mess">
              <span>手机号</span>
              <input type="text">
            </li>
            <li class="login_mess">
              <span>密 码</span>
              <input type="password">
            </li>
            <li class="login_sub" @click="login()">
              <span>登录</span>
            </li>
            <li class="login_regis">
              <router-link to="/Safety">
                忘记密码
              </router-link>
            </li>
            <li class="login_regis">
              <router-link to="/regis">
                去注册
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  methods: {
    login () {
      this.$router.push({
        // path: '/Person/center'
      })
    }
  },
  components: {
  }
}
</script>
<style>
  .login_out{
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .login_img{
    width: 100%;
    overflow: hidden;
  }
  .login_img>img{
    display: block;
  }
  .login_content{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
  }
  .login_box{
    width: 690px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    padding-bottom: 40px;
    overflow: hidden;
  }
  .login_title{
    text-align: center;
    line-height: 60px;
    font-size: 36px;
    color: white;
    margin-bottom: 50px;
    overflow: hidden;
  }
  .login_mess{
    width: 100%;
    padding: 0 30px;
    margin-top: 20px;
    overflow: hidden;
  }
  .login_mess>span{
    display: block;
    width: 120px;
    font-size: 30px;
    line-height: 70px;
    color: white;
    margin-right: 10px;
    float: left;
  }
  .login_mess>input{
    display: block;
    width: 480px;
    padding-left: 5px;
    border: 1px solid #ccc;
    background: white;
    height: 70px;
    float: left;
  }
  .login_sub{
    width: 100%;
    margin-top: 95px;
    overflow: hidden;
  }
  .login_sub>span{
    display: block;
    width: 266px;
    margin: 0 auto;
    line-height: 70px;
    font-size: 32px;
    background: #4f7fb6;
    text-align: center;
    color: white;
  }
  .login_regis{
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
  }
  .login_regis>a{
    color: white;
  }
</style>
