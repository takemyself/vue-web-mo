<template>
  <div>
    <div class="adver_items" v-for="v in data" :key="v.id" v-if="v.sta">
      <a href="https://www.baidu.com" target="_blank">
        <img :src=v.url width='270' >
      </a>
      <div class="adver_close" @click="v.sta=!v.sta">
        <img src="../../assets/mast/close.png" width="30" height="20" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Adver',
  data () {
    return {
      data: [
        {url: 'http://p0.ifengimg.com/pmop/2018/0910/8B7C3AA5E1DDC8811D7E55C4DB2003E4FD45D4FB_size64_w600_h737.jpeg', sta: true},
        {url: 'http://p0.ifengimg.com/pmop/2018/0910/8B7C3AA5E1DDC8811D7E55C4DB2003E4FD45D4FB_size64_w600_h737.jpeg', sta: true}
      ]
    }
  }
}
</script>
<style scoped>
  .adver_items{
    width: 100%;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
  }
  .adver_close{
    width: 30px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
</style>
