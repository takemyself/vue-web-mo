<template>
  <div>
    <div class="cateout">
      <div class="cate">
        <router-link to="/Recruit">
          <img src="../../assets/img/huanbao.png" width="112" height="112" alt="">
          <span>环保</span>
        </router-link>
        <router-link to="/Recruit">
          <img src="../../assets/img/huanbao.png" width="112" height="112" alt="">
          <span>养老</span>
        </router-link>
        <router-link to="/Recruit">
          <img src="../../assets/img/huanbao.png" width="112" height="112" alt="">
          <span>助学</span>
        </router-link>
        <router-link to="/Recruit">
          <img src="../../assets/img/huanbao.png" width="112" height="112" alt="">
          <span>助残</span>
        </router-link>
        <router-link to="/Recruit">
          <img src="../../assets/img/huanbao.png" width="112" height="112" alt="">
          <span>减震救灾</span>
        </router-link>
        <router-link to="/Recruit">
          <img src="../../assets/img/huanbao.png" width="112" height="112" alt="">
          <span>紧急救助</span>
        </router-link>
        <router-link to="/Recruit">
          <img src="../../assets/img/huanbao.png" width="112" height="112" alt="">
          <span>自闭症</span>
        </router-link>
        <router-link to="/Recruit">
          <img src="../../assets/img/huanbao.png" width="112" height="112" alt="">
          <span>物资捐赠</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cate'
}
</script>
<style scoped>
  .cateout{
    width: 100%;
    background:#f6f6f6;
    overflow: hidden;
  }
  .cate{
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    overflow: hidden;
  }
  .cate>a{
    display: block;
    width: 12.5%;
    float: left;
    text-align: center;
    color: black;
  }
  .cate>a>img{
    display: block;
    margin: 0 auto 10px;
  }
</style>
