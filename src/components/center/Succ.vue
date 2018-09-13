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
          <Linesafe></Linesafe>
          <div class="safety_mess">
            <div class="safety_content">
              <img src="../../assets/mast/chongzhi.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Master from './Master'
import Linesafe from './Linesafe'
export default {
  name: 'Safety',
  components: {
    Master,
    Linesafe
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
  .safety_mess{
    width: 100%;
    margin: 50px auto;
    overflow: hidden;
  }
  .safety_content{
    width: 300px;
    padding-top: 50px;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
