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
              <ul>
                <li class="safety_items">
                  <span>手机号</span>
                  <input type="text">
                </li>
                <li class="safety_items">
                  <span>验证码</span>
                  <div class="safety_code">
                    <input type="text">
                    <span>获取</span>
                  </div>
                </li>
                <li class="safety_sub" @click="repass()">
                  下一步
                </li>
              </ul>
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
  methods: {
    repass () {
      this.$router.push({
        path: '/Person/repass'
      })
    }
  },
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
    margin: 0 auto;
    overflow: hidden;
  }
  .safety_items{
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
  }
  .safety_items>span{
    display: block;
    width: 100px;
    float: left;
    text-align: right;
    line-height: 36px;
    color: #666;
  }
  .safety_items>input{
    display: block;
    width: 190px;
    float: right;
    height: 36px;
    border: 1px solid #ccc;
  }
  .safety_code{
    width: 190px;
    float: right;
    border: 1px solid #ccc;
  }
  .safety_code>input{
    display: block;
    width: 100px;
    float: left;
    height: 36px;
  }
  .safety_code>span{
    display: block;
    width: 80px;
    float: right;
    background: #4f7fb6;
    text-align: center;
    line-height: 36px;
    padding: 0 5px;
    color: white;
    cursor: pointer;
  }
  .safety_sub{
    width: 192px;
    line-height: 42px;
    text-align: center;
    color: white;
    background: #4f7fb6;
    margin: 100px auto;
    cursor: pointer;
  }
</style>
