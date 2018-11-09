<template>
  <div>
    <div class="login_out">
      <div class="login_img">
        <img src="../../assets/mast/repass.png" alt="">
      </div>
      <div class="login_content">
        <div class="login_box">
          <ul>
            <li class="login_title">重置密码</li>
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
              <span @click="repass()">重置</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Repass',
  methods: {
    repass () {
      this.$router.push({
        path: '/repass/succ'
      })
    }
  },
  components: {
  }
}
</script>
<style scoped="repass">
  .login_out{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .login_img{
    width: 100%;
    overflow: hidden;
  }
  .login_img>img{
    display: block;
    width: 100%;
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
    top: 40%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    padding-bottom: 40px;
    overflow: hidden;
  }
  .login_title{
    text-align: center;
    font-size: 36px;
    line-height: 70px;
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
    width: 120px;
    font-size: 30px;
    color: white;
    line-height: 70px;
    float: left;
  }
  .login_mess>input{
    display: block;
    width: 480px;
    float: right;
    padding-left: 5px;
    border: 1px solid #ccc;
    background: white;
    line-height: 70px;
    height: 70px;
  }
  .regis_code{
    width: 480px;
    float: right;
    border: 1px solid #ccc;
    height: 70px;
    background: white;
  }
  .regis_code>input{
    display: block;
    float: left;
    height: 70px;
  }
  .regis_code>span{
    display: block;
    float: right;
    line-height: 70px;
    background: #4f7fb6;
    text-align: center;
    color: white;
    padding: 0 30px;
    cursor: pointer;
  }
  .login_sub{
    width: 100%;
    margin-top: 35px;
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
  }
  .login_regis>a{
    font-size: 24px;
    color: white;
  }
</style>
