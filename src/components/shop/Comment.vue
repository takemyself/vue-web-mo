<template>
  <div class="comment">
    <div class="comment_items">
      <div class="goods_user_img">
        <img src="../../assets/img/user_1.png" alt="">
      </div>
      <div class="goods_user_name">
        用户名
      </div>
      <div class="goods_user_mess">
        很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错
      </div>
    </div>
    <div class="comment_items">
      <div class="goods_user_img">
        <img src="../../assets/img/user_1.png" alt="">
      </div>
      <div class="goods_user_name">
        用户名
      </div>
      <div class="goods_user_mess">
        很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错很不错
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Comment',
  mounted () {
    this.$store.commit('changename', '商品评价')
  }
}
</script>
<style scoped>
  .comment{
    width: 100%;
    background: #eee;
    min-height: 1500px;
    overflow: hidden;
  }
  .comment_items{
    width: 100%;
    padding: 20px 30px;
    background: white;
    margin-top: 20px;
    overflow: hidden;
  }
  .goods_user_img{
    width: 50px;
    height: 50px;
    float: left;
    border-radius: 50%;
    overflow: hidden;
  }
  .goods_user_img>img{
    display: block;
    width: 100%;
  }
  .goods_user_name{
    width: 100px;
    font-size: 24px;
    line-height: 50px;
    color: #777;
    float: left;
    margin-left: 20px;
  }
  .goods_user_mess{
    width: 100%;
    margin-top: 20px;
    font-size: 24px;
    color: #272727;
    float: left;
  }
</style>
