<template>
  <div>
    <div class="contact_out">
      <div class="contact_img">
        <img src="../../assets/img/pro.jpg" alt="">
      </div>
      <div class="contact_content">
        <ul class="contact_info">
          <li>
            <div class="info_box">
              <div class="info_img">
                <img src="../../assets/mast/phone.png" alt="">
              </div>
              <p>电话</p>
              <p>13245678911</p>
            </div>
          </li>
          <li>
            <div class="info_box">
              <div class="info_img">
                <img src="../../assets/mast/email.png" alt="">
              </div>
              <p>邮箱</p>
              <p>13245678911@qq.com</p>
            </div>
          </li>
          <li>
            <div class="info_box">
              <div class="info_img">
                <img src="../../assets/mast/address.png" alt="">
              </div>
              <p>地址</p>
              <p>上海市莘庄幸福路388号</p>
            </div>
          </li>
        </ul>
        <div class="contact_other">
          <div class="contact_mess">
            <ul>
              <li>
                <div class="mess_items">
                  <p>姓名</p>
                  <input type="text">
                </div>
                <div class="mess_items">
                  <p>手机号码</p>
                  <input type="text">
                </div>
              </li>
              <li class="mess_leamess">
                <p>留言</p>
                <textarea id="mess_content"></textarea>
              </li>
              <li class="mess_sub">提交您的留言</li>
            </ul>
          </div>
          <div class="contact_map">
            <Maps></Maps>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Maps from './Maps'
export default {
  name: 'Contact',
  components: {
    Maps
  }
}
</script>
<style>
  .contact_out{
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
  }
  .contact_img{
    width: 100%;
    overflow: hidden;
  }
  .contact_img>img{
    display: block;
  }
  .contact_content{
    width: 1200px;
    margin: 0px auto 88px;
    overflow: hidden;
  }
  .contact_info{
    width: 1275px;
    overflow: hidden;
  }
  .contact_info>li{
    width: 350px;
    float: left;
    margin-right: 75px;
  }
  .info_box{
    width: 100%;
    height: 180px;
    margin-top: 80px;
    padding-top: 45px;
    border: 1px solid #4f7fb6;
    text-align: center;
    position: relative;
  }
  .info_img{
    width: 90px;
    height: 90px;
    position: absolute;
    left: 130px;
    top: -45px;
  }
  .info_img>img{
    display: block;
  }
  .info_box>p:first-of-type{
    font-size: 24px;
    line-height: 80px;
  }
  .info_box>p:last-of-type{
    color: #666;
  }
  .contact_other{
    margin-top: 70px;
    overflow: hidden;
  }
  .contact_mess{
    width: 600px;
    float: left;
  }
  .contact_mess li{
    margin-top: 30px;
    overflow: hidden;
  }
  .mess_items{
    width: 180px;
    float: left;
    margin-right: 30px;
  }
  .mess_items>p{
    color: #666;
    line-height: 30px;
  }
  .mess_items>input{
    width: 100%;
    height: 51px;
    border: 1px solid #86a7cd;
    font-size: 18px;
    padding-left: 5px;
    background: #f6f6f6;
  }
  .mess_leamess{
    color: #666;
    line-height: 30px;
  }
  #mess_content{
    width: 100%;
    height: 220px;
    padding: 5px;
    background: #f6f6f6;
    resize: none;
    outline: none;
  }
  .mess_sub{
    width: 100%;
    line-height: 46px;
    border-radius: 5px;
    background: #4f7fb6;
    color: white;
    text-align: center;
  }
  .contact_map{
    width: 515px;
    height: 490px;
    overflow: hidden;
    float: right;
  }
</style>
