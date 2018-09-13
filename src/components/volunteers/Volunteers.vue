<template>
  <div>
    <div class="volun_out">
      <div class="volun_img">
        <img src="../../assets/img/volun.jpg" width="100%" alt="">
      </div>
      <div class="volun_content">
        <ul>
          <li class="volun_itmes">
            <div class="volun_left">
              <img src="../../assets/img/guanggao.png" alt="">
            </div>
            <div class="volun_right">
              <ul>
                <li class="volun_title">活动标题</li>
                <li class="volun_intro">
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                </li>
                <li class="volun_more">
                  <div class="volun_more_left">
                    <img src="../../assets/mast/tagsicon.png" alt=""> 环保类
                  </div>
                  <div class="volun_more_right">
                    <router-link to="/Volunteers/content">
                      查看更多
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="volun_itmes">
            <div class="volun_left">
              <img src="../../assets/img/guanggao.png" alt="">
            </div>
            <div class="volun_right">
              <ul>
                <li class="volun_title">活动标题</li>
                <li class="volun_intro">
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                  活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
                </li>
                <li class="volun_more">
                  <div class="volun_more_left">
                    <img src="../../assets/mast/tagsicon.png" alt=""> 环保类
                  </div>
                  <div class="volun_more_right">
                    <router-link to="/Volunteers/content">
                      查看更多
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="news_page">
        <span>
          <img src="../../assets/mast/left_1.png" alt="">
        </span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span><img src="../../assets/mast/dian.png" width="40" alt=""></span>
        <span>5</span>
        <span>
          <img src="../../assets/mast/rightcontrol.png" alt="">
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Volunteers',
  components: {
  }
}
</script>
<style>
  .volun_out{
    width: 100%;
    min-width: 1200px;
    background: #f6f6f6;
    overflow: hidden;
  }
  .volun_img>img{
    display: block;
  }
  .volun_content{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .volun_itmes{
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin-top: 15px;
    background: white;
    overflow: hidden;
  }
  .volun_left{
    width: 260px;
    height: 260px;
    overflow: hidden;
    float: left;
  }
  .volun_left>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .volun_right{
    width: 880px;
    padding-right: 30px;
    float: right;
    overflow: hidden;
  }
  .volun_title{
    font-size: 20px;
    line-height: 50px;
  }
  .volun_intro{
    height: 90px;
    line-height: 30px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .volun_more{
    margin-top: 49px;
    border-top: 1px dashed #ccc;
  }
  .volun_more_left{
    float: left;
    line-height: 70px;
  }
  .volun_more_right{
    width: 120px;
    border: 2px solid #4f7fb6;
    float: right;
    margin-top: 20px;
  }
  .volun_more_right>a{
    display: block;
    width: 100%;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
    color: #4d4d4d;
  }
  .news_page{
    width: 1200px;
    margin: 40px auto;
    text-align: center;
    font-size: 0;
    overflow: hidden;
  }
  .news_page>span{
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    background: white;
    text-align: center;
    font-size: 16px;
    color: #333;
    border: 1px solid #333;
    margin-right: 5px;
    cursor: pointer;
    overflow: hidden;
  }
  .news_page>span:first-of-type,.news_page>span:last-of-type{
    border: none;
  }
  .news_page>span:hover{
    background: rgba(0,0,0,0.3);
  }
</style>
