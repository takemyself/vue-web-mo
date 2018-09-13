<template>
  <div>
    <div class="recontent_out">
      <div class="recontent_content">
        <ul>
          <li class="recontent_img">
            <img src="../../assets/img/banner.jpg" alt="">
          </li>
          <li class="recontent_title">
            活动标题
          </li>
          <li class="recontent_lable">
            <img src="../../assets/mast/usericon-c.png" alt="">&nbsp;&nbsp;Admin&nbsp;&nbsp;|&nbsp;&nbsp;
            <img src="../../assets/mast/watchicon.png" alt="">&nbsp;&nbsp;2018-06-07
          </li>
          <li class="recontent_mess">
            活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
            活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
            活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
            活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
            活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
            活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
            活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
            活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
            活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
          </li>
        </ul>
      </div>
      <div class="recontent_sign">
        <ul>
          <li class="recontent_title">
            报名
          </li>
          <li class="sign_content">
            <span>活动时间：2018-09-11</span>
            <span>活动地点：上海市闵行区幸福路388号</span>
            <span>参与人数：30</span>
          </li>
          <li class="sign_form">
            <div class="sign_items">
              <p>姓名</p>
              <input type="text">
            </div>
            <div class="sign_items">
              <p>手机号</p>
              <input type="text">
            </div>
            <div class="sign_sub">报&nbsp;&nbsp;名</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recruitcontent',
  components: {
  }
}
</script>
<style scoped>
  .recontent_out{
    width: 100%;
    min-width: 1200px;
    background: #f6f6f6;
    overflow: hidden;
  }
  .recontent_content{
    width: 1200px;
    margin: 30px auto 0;
    padding: 15px;
    background: white;
    overflow: hidden;
  }
  .recontent_img>img{
    width: 100%;
  }
  .recontent_title{
    margin-top: 15px;
    font-size: 24px;
    font-weight: 700;
  }
  .recontent_lable{
    margin-top: 15px;
    color: #ccc;
  }
  .recontent_mess{
    margin-top: 20px;
  }
  .recontent_sign{
    width: 1200px;
    margin: 15px auto 50px;
    padding: 0 15px 15px 15px;
    background: white;
    overflow: hidden;
  }
  .sign_content{
    margin-top: 25px;
  }
  .sign_content>span{
    display:inline-block;
    margin-right: 30px;
    font-weight: 700;
  }
  .sign_form{
    margin-top: 25px;
  }
  .sign_items{
    width: 216px;
    float: left;
    margin-right: 50px;
  }
  .sign_items>p{
    color: #666;
    line-height: 20px;
  }
  .sign_items>input{
    background: #ccc;
    width: 216px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    overflow: hidden;
  }
  .sign_sub{
    width: 180px;
    color: white;
    background: #4f7fb6;
    float: right;
    margin-top: 20px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
</style>
