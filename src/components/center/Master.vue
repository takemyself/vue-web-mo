<template>
  <div>
    <ul>
      <li class="master_img">
        <div class="master_img_left">
          <img src="../../assets/img/user.png" alt="">
        </div>
        <div class="master_img_right">
          人生赢家
        </div>
      </li>
      <li class="master_items">
        <div class="master_tiems_img">
          <img src="../../assets/mast/shezhi.png" alt="">
        </div>
        <div class="master_items_mess">
          <router-link to="">账号设置</router-link>
          <router-link to="/Person">个人资料</router-link>
          <router-link to="/Person/safety">密码修改</router-link>
        </div>
      </li>
      <li class="master_items">
        <div class="master_tiems_img">
          <img src="../../assets/mast/actives.png" alt="">
        </div>
        <div class="master_items_mess">
          <router-link to="">活动中心</router-link>
          <router-link to="/Person/actives">参与活动</router-link>
        </div>
      </li>
      <li class="master_items">
        <div class="master_tiems_img">
          <img src="../../assets/mast/help.png" alt="">
        </div>
        <div class="master_items_mess">
          <router-link to="">帮助中心</router-link>
          <router-link to="/Person/help">常见问题</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Master'
}
</script>
<style>
  .master_img{
    width: 100%;
    padding: 55px;
    border-bottom:1px solid #e0e0e0;
    overflow: hidden;
  }
  .master_img_left{
    width: 55px;
    float: left;
  }
  .master_img_left>img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .master_img_right{
    width: 105px;
    float: right;
    text-align: center;
    line-height: 55px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #323736;
    overflow: hidden;
  }
  .master_items{
    width: 100%;
    padding: 0 55px;
    margin-top: 25px;
    overflow: hidden;
  }
  .master_tiems_img{
    width: 30px;
    float: left;
  }
  .master_tiems_img>img{
    display: block;
  }
  .master_items_mess{
    width: 130px;
    float: right;
    text-align: center;
    font-size: 14px;
  }
  .master_items_mess>a{
    display: block;
    color: #999;
    line-height: 24px;
  }
  .master_items_mess>a:first-of-type{
    color: #666;
    font-size: 18px;
    line-height: 30px;
    cursor: default;
  }
</style>
