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
          <div class="center_right_out">
            <router-link to="/Recruitcontent" class="center_items">
              <img src="../../assets/img/huigu.png" width="100%" alt="">
              <div class="content_introduction">
                <p>某某活动</p>
                <p>
                  <img src="../../assets/mast/usericon.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../assets/mast/data.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                </p>
                <p>活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活</p>
              </div>
            </router-link>
            <router-link to="/Recruitcontent" class="center_items">
              <img src="../../assets/img/huigu.png" width="100%" alt="">
              <div class="content_introduction">
                <p>某某活动</p>
                <p>
                  <img src="../../assets/mast/usericon.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../assets/mast/data.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                </p>
                <p>活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活</p>
              </div>
            </router-link>
            <router-link to="/Recruitcontent" class="center_items">
              <img src="../../assets/img/huigu.png" width="100%" alt="">
              <div class="content_introduction">
                <p>某某活动</p>
                <p>
                  <img src="../../assets/mast/usericon.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../assets/mast/data.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                </p>
                <p>活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活</p>
              </div>
            </router-link>
            <router-link to="/Recruitcontent" class="center_items">
              <img src="../../assets/img/huigu.png" width="100%" alt="">
              <div class="content_introduction">
                <p>某某活动</p>
                <p>
                  <img src="../../assets/mast/usericon.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../assets/mast/data.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                </p>
                <p>活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活</p>
              </div>
            </router-link>
            <router-link to="/Recruitcontent" class="center_items">
              <img src="../../assets/img/huigu.png" width="100%" alt="">
              <div class="content_introduction">
                <p>某某活动</p>
                <p>
                  <img src="../../assets/mast/usericon.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../assets/mast/data.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                </p>
                <p>活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活</p>
              </div>
            </router-link>
            <router-link to="/Recruitcontent" class="center_items">
              <img src="../../assets/img/huigu.png" width="100%" alt="">
              <div class="content_introduction">
                <p>某某活动</p>
                <p>
                  <img src="../../assets/mast/usericon.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../assets/mast/data.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;24/32
                </p>
                <p>活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活活动回顾活</p>
              </div>
            </router-link>
          </div>
          <div class="center_page">
            <span>上一页</span>
            <span class="page_active">1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>下一页</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Master from './Master'
export default {
  name: 'Actives',
  components: {
    Master
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
    padding: 15px;
    float: right;
    background: white;
    overflow: hidden;
  }
  .center_right_out{
    width: 900px;
    overflow: hidden;
  }
  .center_items{
    display: block;
    width: 270px;
    margin-right: 30px;
    float: left;
    overflow: hidden;
  }
  .content_introduction{
    width: 100%;
    padding: 5px 10px 10px 10px;
  }
  .content_introduction>p:first-of-type{
    font-size: 18px;
    color: black;
    font-weight: 700;
  }
  .content_introduction>p:nth-of-type(2){
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #ccc;
  }
  .content_introduction>p:last-of-type{
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #ccc;
    height: 40px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .center_page{
    width: 100%;
    margin-top: 30px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    color: #ccc;
    overflow: hidden;
  }
  .center_page>span{
    display: inline-block;
    margin-right: 10px;
  }
  .page_active{
    color: black;
  }
</style>
