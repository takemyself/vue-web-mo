<template>
  <div class="banner">
    <img src="../../assets/mast/mbanner.png" alt="">
    <div class="intro_value">
      <span>找供应商，到当日网</span>
      <!--<span>简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</span>-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner{
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .banner>img{
    width: 100%;
    height: 350px;
  }
  .intro_value{
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    text-align: center;
  }
  .intro_value>span{
    width: 100%;
    display: block;
    padding: 0 30px;
    text-align: center;
  }
  .intro_value>span:first-of-type{
    font-size: 48px;
  }
  /*.intro_value>span:last-of-type{*/
    /*margin-top: 5px;*/
    /*font-size: 24px;*/
  /*}*/
</style>
