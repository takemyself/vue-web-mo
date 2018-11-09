<template>
  <div class="address">
    <div class="add_address">
      保存
    </div>
    <div class="add_addressitems">
      <input type="text" class="address_name" placeholder="名字">
    </div>
    <div class="add_addressitems">
      <input type="number" class="address_name" placeholder="电话号码">
    </div>
    <div class="add_addressitems">
      <v-distpicker type="mobile" :province="select.province" :city="select.city" :area="select.area"></v-distpicker>
    </div>
    <div class="add_addressitems">
      <input type="number" class="address_name" placeholder="详细地址">
    </div>
    <div class="del_address">
      删除收货地址
    </div>
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
export default {
  name: 'Editaddress',
  data () {
    return {
      select: { province: '上海市', city: '上海城区', area: '闵行区' }
    }
  },
  mounted () {
    this.$store.commit('changename', '编辑地址')
  },
  components: { VDistpicker }
}
</script>
<style scoped="newsaddress">
  .address{
    width: 100%;
    min-height: 1500px;
    background: #eee;
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
  .add_addressitems{
    width: 100%;
    padding: 0 30px;
    background: white;
    border-bottom: 1px solid #eee;
  }
  .address_name{
    width: 100%;
    line-height: 100px;
    font-size: 30px;
  }
  .del_address{
    width: 100%;
    background: white;
    padding: 0 30px;
    font-size: 30px;
    line-height: 100px;
    margin-top: 40px;
    overflow: hidden;
  }
</style>
