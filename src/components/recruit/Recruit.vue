<template>
  <div>
    <Cate></Cate>
    <div class="recruit_out">
      <div class="recruit_content">
        <div class="content_items">
          <div class="content_title">
            <span>招募中心</span>
          </div>
        </div>
        <div class="recruit_mess">
          <div class="recruit_items">
            <router-link to="/Recruit/content">
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
          <div class="recruit_items">
            <router-link to="/Recruit/content">
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
          <div class="recruit_items">
            <router-link to="/Recruit/content">
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
          <div class="recruit_items">
            <router-link to="/Recruit/content">
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
          <div class="recruit_items">
            <router-link to="/Recruit/content">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cate from '../common/Cate'
export default {
  name: 'Recruit',
  components: {
    Cate
  }
}
</script>
<style scoped>
  .recruit_out{
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
    background: #f6f6f6;
  }
  .recruit_content{
    width: 1200px;
    margin: 0 auto 100px;
    overflow: hidden;
  }
  .content_items{
    width: 100%;
    overflow: hidden;
  }
  .content_title{
    width: 100%;
    padding: 10px 0;
    position: relative;
    overflow: hidden;
  }
  .content_title:before{
    width: 100%;
    height: 2px;
    content: "";
    background: #ccc;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
  .content_title:after{
    width: 100px;
    height: 2px;
    content: "";
    background: #4F7FB6;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
  .content_title>span{
    display: block;
    float: left;
    font-size: 24px;
    line-height: 32px;
  }
  .recruit_mess{
    width: 1240px;
    float: left;
    overflow: hidden;
  }
  .recruit_items{
    width: 270px;
    float: left;
    margin-top: 30px;
    margin-right: 40px;
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
</style>
