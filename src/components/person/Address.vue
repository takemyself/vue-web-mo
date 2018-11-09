<template>
  <div class="address">
    <div class="add_address">
      <router-link to="/persons/newaddress">
        添加新地址
      </router-link>
    </div>
    <div class="address_items">
      <div class="address_left">
        <div class="address_name">
          <span>黄思佳</span>
          <span>177****6666</span>
        </div>
        <div class="address_content">
          上海市 闵行区 莘庄镇 莘福路388号 莘庄置业大厦1号楼611室
        </div>
      </div>
      <div class="address_right">
        <router-link to="/persons/Editaddress">
          编辑
        </router-link>
      </div>
    </div>
    <div class="address_items">
      <div class="address_left">
        <div class="address_name">
          <span>黄思佳</span>
          <span>177****6666</span>
        </div>
        <div class="address_content">
          上海市 闵行区 莘庄镇 莘福路388号 莘庄置业大厦1号楼611室
        </div>
      </div>
      <div class="address_right">
        <router-link to="/persons/Editaddress">
          编辑
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Address',
  mounted () {
    this.$store.commit('changename', '收货地址')
  }
}
</script>
<style scoped="address">
  .address{
    width: 100%;
    overflow: hidden;
  }
  .add_address{
    width: 180px;
    font-size: 30px;
    line-height: 80px;
    text-align: right;
    position: fixed;
    top: 0;
    right: 30px;
    z-index: 99;
  }
  .add_address>a{
    color: black;
  }
  .address_items{
    width: 100%;
    padding: 20px 30px;
    overflow: hidden;
  }
  .address_left{
    width: 600px;
    float: left;
    border-right: 1px solid #999;
  }
  .address_right{
    width: 90px;
    float: right;
  }
  .address_name, .address_content{
    width: 100%;
    overflow: hidden;
  }
  .address_name>span{
    display: inline-block;
    font-size: 30px;
    line-height: 35px;
  }
  .address_name>span:last-of-type{
    font-size: 24px;
    color: #929292;
  }
  .address_content{
    font-size: 28px;
    line-height: 35px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .address_right>a{
    display: block;
    width: 100%;
    line-height: 70px;
    text-align: center;
    font-size: 26px;
    color: #666;
  }
</style>
