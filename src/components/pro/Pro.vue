<template>
  <div>
    <div class="pro_out">
      <div class="pro_img">
        <img src="../../assets/img/pro.jpg" alt="">
      </div>
      <div class="pro_content">
        <ul>
          <li class="pro_title">
            <div class="pro_title_out">
              <span>
                我们想听到你的声音
              </span>
            </div>
          </li>
          <li class="pro_title_two">WE WANT TO HEAR YOU VOICE</li>
          <li class="pro_input">
            <input type="text" placeholder="姓名">
            <input type="text" placeholder="邮箱">
            <input type="text" placeholder="电话">
            <input type="text" placeholder="地址">
          </li>
          <li class="pro_mess">
            <textarea name="" id="pro_text" placeholder="您的项目简介"></textarea>
          </li>
          <li class="pro_sub">
            <span>提交您的信息</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pro',
  components: {
  }
}
</script>
<style scoped>
  .pro_out{
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
  }
  .pro_img{
    overflow: hidden;
  }
  .pro_img>img{
    display: block;
  }
  .pro_content{
    width: 920px;
    margin: 30px auto 210px;
    overflow: hidden;
  }
  .pro_title{
    width: 100%;
    height: 40px;
    overflow: hidden;
  }
  .pro_title_out{
    width: 500px;
    height: 2px;
    background: black;
    margin: 20px auto;
    position: relative;
    text-align: center;
  }
  .pro_title_out>span{
    display: block;
    width: 400px;
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
    font-size: 36px;
    line-height: 40px;
    background: white;
  }
  .pro_title_two{
    text-align: center;
    color: #ccc;
    line-height: 30px;
    overflow: hidden;
  }
  .pro_input{
    width: 980px;
    overflow: hidden;
  }
  .pro_input>input{
    display: block;
    width: 430px;
    height: 56px;
    font-size: 18px;
    margin: 40px 60px 0 0;
    border: 1px solid #ccc;
    float: left;
    padding-left: 5px;
  }
  .pro_mess,.pro_sub{
    margin-top: 40px;
    overflow: hidden;
  }
  #pro_text{
    width: 100%;
    height: 450px;
    padding: 15px;
    resize:none;
    border: 1px solid #ccc;
    outline: none;
  }
  .pro_sub>span{
    display: block;
    width: 580px;
    line-height: 56px;
    margin: 0 auto;
    background: #4f7fb6;
    color: white;
    text-align: center;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
