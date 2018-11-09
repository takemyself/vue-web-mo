<template>
  <div class="heard">
    <div class="return_url" @click="beforWeb()"></div>
    <span>{{ $store.state.headTitle.name }}</span>
  </div>
</template>
<script>
export default {
  name: 'Heards',
  data () {
    return {headTitle: ''}
  },
  mounted () {
  },
  methods: {
    beforWeb: function () {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
  .heard{
    width: 100%;
    height: 100px;
    text-align: center;
    padding: 10px 30px;
    box-shadow: 0 0 5px #929292;
    position: fixed;
    z-index: 9;
    left: 0;
    top: 0;
    background: white;
  }
  .return_url{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 30px;
    top: 35px;
    border-bottom: 5px solid black;
    border-left: 5px solid black;
    float: left;
    transform: rotate(45deg);
  }
  .heard>span{
    display: block;
    width: 100%;
    font-size: 32px;
    line-height: 80px;
    text-align: center;
  }
</style>
