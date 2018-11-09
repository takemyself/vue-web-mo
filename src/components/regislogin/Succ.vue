<template>
  <div>
    <div class="login_out">
      <div class="login_img">
        <img src="../../assets/mast/repass.png" alt="">
      </div>
      <div class="succ">
        <div class="succ_title">
          重置密码
        </div>
        <img src="../../assets/mast/ok.png" alt="">
        <div class="succ_mess">
          重置成功
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Succ'
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
  .succ{
    width: 100%;
    position: absolute;
    top: 30px;
    left: 0;
    overflow: hidden;
  }
  .succ_title{
    width: 100%;
    margin: 50px auto;
    text-align: center;
    color: white;
    font-size: 34px;
    overflow: hidden;
  }
  .succ>img{
    display: block;
    margin: 200px auto 0;
  }
  .succ_mess{
    width: 100%;
    margin: 50px auto;
    text-align: center;
    color: white;
    font-size: 34px;
    overflow: hidden;
  }
</style>
