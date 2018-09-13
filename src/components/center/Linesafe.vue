<template>
  <div>
    <div class="safety_top">
      <span></span>
      <span class="safety_active"></span>
      <span></span>
    </div>
    <div class="safety_cate">
      <span>短信验证</span>
      <span>重置密码</span>
      <span>重置成功</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Linesafe'
}
</script>
<style scoped>
  .safety_top{
    width: 540px;
    height: 11px;
    margin: 50px auto 0;
    position: relative;
  }
  .safety_top:before{
    display: block;
    width: 100%;
    height: 1px;
    content: "";
    background: #ccc;
    position: absolute;
    top: 5px;
    left: 0;
  }
  .safety_top>span{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    overflow: hidden;
    background: #ccc;
    position: absolute;
    top: 0;
    z-index: 10;
  }
  .safety_top>span:first-of-type{
    background: #4f7fb6;
    left: 0;
  }
  .safety_top>span:nth-of-type(2){
    left: 50%;
  }
  .safety_top>span:last-of-type{
    right: 0;
  }
  /*改变这个长度和颜色*/
  .safety_top .safety_active{
    background: #4f7fb6;
  }
  .safety_top:after{
    display: block;
    width: 50%;
    height: 1px;
    content: "";
    background: #4f7fb6;
    position: absolute;
    top: 5px;
    left: 0;
  }
  .safety_cate{
    width: 810px;
    margin: 30px auto;
    vertical-align: middle;
    font-size: 0;
  }
  .safety_cate>span{
    display: inline-block;
    width: 270px;
    font-size: 18px;
    color: #4f7fb6;
    font-weight: 700;
    text-align: center;
  }
</style>
