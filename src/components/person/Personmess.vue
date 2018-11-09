<template>
  <div>
    <Userbg></Userbg>
    <ul class="per_mess">
      <li class="per_items">
        <span>登录账号</span>
        <span>:</span>
        <span>17788884444</span>
      </li>
      <li class="per_items">
        <span>手机</span>
        <span>:</span>
        <span>17788884444</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Userbg from './Userbg'
export default {
  name: 'Personmess',
  components: {
    Userbg
  }
}
</script>
<style scoped="promess">
  .per_mess{
    width: 100%;
    padding: 60px 30px;
    overflow: hidden;
  }
  .per_items{
    width: 100%;
    height: 72px;
    overflow: hidden;
  }
  .per_items>span{
    display: block;
    float: left;
    margin-right: 8px;
    font-size: 28px;
    line-height: 70px;
  }
  .per_items>span:first-of-type{
    width: 120px;
    color: #999;
    text-align: justify;
  }
  .per_items>span:first-of-type:after{
    display:inline-block;
    width:100%;
    content: "";
  }
  .per_items>span:nth-of-type(2){
    color: #999;
  }
  .per_items>span:last-of-type{
    width: 530px;
    padding-left: 50px;
    border-bottom: 2px solid #999;
  }
</style>
