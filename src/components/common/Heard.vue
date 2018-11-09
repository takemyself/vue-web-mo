<template>
  <div class="heard">
    <div class="logo">
      <img src="../../assets/mast/logo.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Heard',
  data () {
    return {addresssta: ''}
  },
  methods: {
  }
}
</script>

<style scoped>
  .heard{
    width: 100%;
    height: 100px;
    padding: 10px 30px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background: white;
  }
  .logo{
    width: 90px;
    float: left;
  }
  .logo>img{
    /*width: 90px;*/
    height: 80px;
  }
</style>
