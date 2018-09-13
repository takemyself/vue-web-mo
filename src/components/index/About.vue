<template>
  <div>
    <div class="about_out">
      <div class="about_content">
        <div class="about_img">
          <img src="../../assets/img/ggwm.png" width="450" height="282" alt="">
        </div>
        <div class="about_text">
          <div class="about_top">
            <p>关于我们</p>
            <p>About us</p>
            <p>
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
              上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心上海公益事业发展中心
            </p>
          </div>
          <div class="about_bottom">
            <router-link to="/Abouts">
              <img src="../../assets/mast/tiaozhuan.png" width="32" height="32" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style scoped>
  .about_out{
    width: 100%;
    min-width: 1200px;
    background: #f6f6f6;
    overflow: hidden;
  }
  .about_content{
    width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    overflow: hidden;
  }
  .about_img{
    width: 450px;
    float: left;
    line-height: 5px;
  }
  .about_text{
    width: 680px;
    float: right;
  }
  .about_top{
    width: 100%;
    height: 250px;
  }
  .about_top>p:first-of-type{
    font-size: 24px;
    line-height: 40px;
  }
  .about_top>p:nth-of-type(2) {
    font-size: 20px;
    line-height: 24px;
  }
  /*后期去掉*/
  .about_top>p:nth-of-type(3){
    margin-top: 10px;
    font-size: 12px;
    line-height: 20px;
    height: 160px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    overflow: hidden;
  }
  .about_bottom>a{
    display: block;
    width: 32px;
    height: 32px;
    float: right;
  }
</style>
