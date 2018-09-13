<template>
  <div>
    <div class="login_out">
      <div class="login_img">
        <img src="../../assets/img/pro.jpg" alt="">
      </div>
      <div class="login_content">
        <div class="login_box">
          <ul>
            <li class="login_title">用 户 注 册</li>
            <li class="login_mess">
              <span>手机号</span>
              <input type="text">
            </li>
            <li class="login_mess">
              <span>验证码</span>
              <div class="regis_code">
                <input type="text">
                <span>获取验证码</span>
              </div>
            </li>
            <li class="login_mess">
              <span>密码</span>
              <input type="password">
            </li>
            <li class="login_mess">
              <span>确认密码</span>
              <input type="password">
            </li>
            <li class="login_sub">
              <span>注册</span>
            </li>
            <li class="login_regis">
              <router-link to="/Login">
                已有账号，去登录
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
  name: 'Regis',
  components: {
  }
}
</script>
<style>
  .login_out{
    width: 100%;
    min-width: 1200px;
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
    width: 420px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    padding-bottom: 40px;
    background: white;
    overflow: hidden;
  }
  .login_title{
    text-align: center;
    line-height: 60px;
    background: #4f7fb6;
    color: white;
  }
  .login_mess{
    width: 100%;
    padding: 0 30px;
    margin-top: 20px;
    overflow: hidden;
  }
  .login_mess>span{
    display: block;
    width: 70px;
    line-height: 42px;
    float: left;
  }
  .login_mess>input{
    display: block;
    width: 280px;
    float: right;
    padding-left: 5px;
    border: 1px solid #ccc;
    height: 42px;
  }
  .regis_code{
    width: 280px;
    float: right;
    border: 1px solid #ccc;
    height: 42px;
  }
  .regis_code>input{
    display: block;
    float: left;
    height: 42px;
  }
  .regis_code>span{
    display: block;
    float: right;
    line-height: 42px;
    background: #4f7fb6;
    text-align: center;
    color: white;
    padding: 0 10px;
    cursor: pointer;
  }
  .login_sub{
    width: 100%;
    margin-top: 35px;
    overflow: hidden;
  }
  .login_sub>span{
    display: block;
    width: 162px;
    margin: 0 auto;
    line-height: 42px;
    background: #4f7fb6;
    text-align: center;
    color: white;
  }
  .login_regis{
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
  }
</style>
