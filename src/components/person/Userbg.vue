<template>
  <div class="center">
    <div class="center_box">
      <img src="../../assets/img/user_bg.png" alt="">
      <span>人生赢家</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Userbg'
}
</script>
<style scoped="userbg">
  .center{
    width: 100%;
    background: #eee;
    overflow: hidden;
  }
  .center_box{
    width: 100%;
    height: 322px;
    background-image: url("../../assets/mast/bg_user.png");
    background-repeat: no-repeat;
    background-size: 750px 322px;
    position: relative;
    overflow: hidden;
  }
  .center_box>img{
    display: block;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    margin: 30px auto 30px;
    overflow: hidden;
  }
  .center_box>span{
    display: block;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 28px;
  }
</style>
