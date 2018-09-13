<template>
  <div>
    <div class="topout">
      <div class="top">
        <div class="logo">
          <router-link to="/">
            <img src="../../assets/mast/logo.png" alt="logo">
          </router-link>
        </div>
        <div class="nav">
          <div class="mess">
            <div class="mess_left">
              <div class="address" @click="showAddress">
                上海
                <div class="address_content" v-show="addresssta">
                  <span>西安</span>
                  <span>西安</span>
                  <span>西安</span>
                  <span>西安</span>
                  <span>西安</span>
                  <span>西安</span>
                  <span>西安</span>
                  <span>西安</span>
                  <span>西安</span>
                </div>
              </div>
              <div class="sou">
                <input class="sousuo" type="text" placeholder="搜索">
              </div>
            </div>
            <div class="mess_right">
              <div class="content">
                <router-link to="/Regis">注册</router-link>
                <span>|</span>
                <router-link to="/Login">登录</router-link>
              </div>
              <div class="love">
                <span>❤</span>
                <span>爱心捐赠</span>
              </div>
            </div>
          </div>
          <div class="nav_heard">
            <router-link to="/">首页</router-link>
            <router-link to="/Abouts">关于我们</router-link>
            <router-link to="/Recruit">招募中心</router-link>
            <router-link to="/">公益产品</router-link>
            <router-link to="/News">新闻动态</router-link>
            <router-link to="/Volunteers">志愿者风采</router-link>
            <router-link to="/Pro">项目合作</router-link>
            <router-link to="/Contact">联系我们</router-link>
            <router-link to="/Person">会员中心</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Heard',
  data () {
    return {addresssta: ''}
  },
  methods: {
    showAddress () {
      this.addresssta = !this.addresssta
    }
  }
}
</script>

<style scoped>
.topout{
  width: 100%;
  background: white;
}
.top{
  width: 1200px;
  margin: 0 auto;
}
.logo{
  width: 270px;
  float: left;
  line-height: 5px;
}
.nav{
  width: 930px;
  padding: 18px 0 0 30px;
  float: right;
}
.mess{
  width: 100%;
  /*overflow: auto;*/
  height: 36px;
  border-bottom: 1px solid transparent;
}
.mess_left{
  width: 450px;
  float: left;
}
.mess_right{
  width: 450px;
  float: right;
}
.address{
  float: left;
  text-align: left;
  font-size: 14px;
  line-height: 36px;
  position: relative;
  cursor: pointer;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.address:after{
  display: block;
  width: 5px;
  height: 5px;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  content: "";
  position: absolute;
  top:14px;
  right: -10px;
  transform: rotate(-45deg);
}
.address_content{
  position: absolute;
  width: 200px;
  background: white;
  top: 36px;
  left: 0;
}
.address_content>span{
  display: block;
  width: 25%;
  float: left;
  text-align: center;

}
.sou{
  width: 204px;
  height: 36px;
  float: right;
  padding-left: 30px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #4f7fb6;
  background-image:url("../../assets/mast/sousuo.png");
  background-repeat: no-repeat;
  background-position: 9px 9px;
}
.sousuo{
  width: 100%;
  height: 36px;
  line-height: 36px;
}
.sousuo::placeholder{
  color: #9cc4f2;
}
.content{
  float: right;
  font-size: 14px;line-height: 36px;
  color: #4f7fb6;
}
.content>a:last-of-type{
  color: black;
}
.love{
  width: 116px;
  height: 36px;
  border-radius: 10px;
  overflow: hidden;
  float: right;
  margin-right: 50px;
  border: 1px solid #4f7fb6;
  text-align: center;
  font-size: 16px;
  line-height: 36px;
}
.love>span:first-of-type{
  color: red;
}
.nav_heard{
  margin-top: 30px;
  font-size: 0;
}
.nav_heard>a{
  display: inline-block;
  font-size: 18px;
  line-height: 46px;
  color: black;
  padding: 0 15px;
}
</style>
