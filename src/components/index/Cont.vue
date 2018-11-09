<template>
  <div class="cont">
    <div class="cont_items" v-for="items in msg" :key="items.cid">
      <router-link :to="{path:'/server/company/'+items.cid}">
        <div class="cont_title">
          {{items.cname}}
        </div>
        <div class="cont_cate">
          <span v-for="vv in items._cate" :key="vv.id">
            {{vv}}
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cont',
  data () {
    return {
    }
  },
  props: ['msg']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cont{
    width: 100%;
    padding: 0 30px 30px 30px;
    background: #f4f8fb;
    overflow: hidden;
  }
  .cont_items{
    width: 100%;
    border-radius: 15px;
    background: white;
    margin-top: 30px;
    overflow: hidden;
  }
  .cont_title{
    width: 100%;
    padding-left: 60px;
    font-size: 32px;
    line-height: 72px;
    position: relative;
    border-bottom: 1px solid #ccc;
    color: #929292;
    overflow: hidden;
  }
  .cont_title:after{
    width: 12px;
    height: 12px;
    content: "";
    background: #1779BD;
    border-radius: 50%;
    position: absolute;
    left: 30px;
    top: 30px;
    overflow: hidden;
  }
  .cont_cate{
    width: 100%;
    margin-top: 20px;
    font-size: 0;
    overflow: hidden;
  }
  .cont_cate span{
    display: inline-block;
    width: 25%;
    text-align: center;
    font-size: 28px;
    color: #929292;
    margin-bottom: 20px;
  }
</style>
