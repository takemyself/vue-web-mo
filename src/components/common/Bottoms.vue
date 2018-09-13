<template>
  <div>
    <div class="bottomout">
      <div class="bottom">
        <ul>
          <li class="nav">
            <router-link to="/">网站首页</router-link>
            <router-link to="">|</router-link>
            <router-link to="/Abouts">关于我们</router-link>
            <router-link to="">|</router-link>
            <router-link to="/Recruit">招募中心</router-link>
            <router-link to="">|</router-link>
            <router-link to="/Newslist">新闻动态</router-link>
            <router-link to="">|</router-link>
            <router-link to="/Volunteers">志愿者风采</router-link>
            <router-link to="">|</router-link>
            <router-link to="/Recruit">活动回顾</router-link>
            <router-link to="">|</router-link>
            <router-link to="/Pro">项目合作</router-link>
            <router-link to="">|</router-link>
            <router-link to="/Contact">联系我们</router-link>
            <router-link to="">|</router-link>
            <router-link to="/">供应商城</router-link>
          </li>
          <li class="introduction">
            <div class="introduction_left">
              <p>上海善行公益事业发展中心</p>
              <p>地址：上海市浦东新区峨山路613号A楼411</p>
              <p>电话：021-58402370</p>
              <p>邮箱：info@yinglv.org</p>
            </div>
            <div class="introduction_right">
              <router-link to="/">
                <img src="../../assets/mast/botttom-logo.png" width="90" height="99" alt="">
              </router-link>
            </div>
          </li>
          <li class="copyright">
            备案号：123465
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bottoms',
  data () {
    return {msg: 'Welcome to Your Vue.js App'}
  }
}
</script>

<style scoped>
.bottomout{
  width: 100%;
  padding-top: 12px;
  padding-bottom: 30px;
  background: #272727;
  overflow: hidden;
}
.bottom{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.nav{
  width: 100%;
  border-bottom: 1px solid white;
  font-size: 0;
}
.nav>a{
  display: inline-block;
  font-size: 16px;
  color: white;
  line-height: 58px;
  padding:0 5px;
}
.introduction{
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid white;
  overflow: hidden;
}
.introduction_left{
  float: left;
}
.introduction_left>p{
  color: white;
  line-height: 46px;
}
.introduction_right{
  padding-top: 46px;
  float: right;
}
.copyright{
  width: 100%;
  color: white;
  line-height: 46px;
  font-size: 12px;
}
</style>
