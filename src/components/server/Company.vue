<template>
  <div class="company">
    <ul>
      <li class="company_items" v-for="item in mess.mess" :key="item.sid">
        <router-link :to="{path: '/server/intro/'+item.sid}">
          <div class="company_out">
            <div class="company_img">
              <img v-lazy="$store.state.headTitle.imgurl + item.pic" alt="">
            </div>
            <div class="company_mess">
              <p>{{ item.sname }}</p>
              <p>成立时间：{{ item.times }}</p>
              <p>雇员数量：{{ item.persons }}</p>
            </div>
          </div>
          <div class="company_out">
            <div class="company_cate_title">
              业务范围：
            </div>
            <div class="company_cate_mess">
              <span v-for="vv in item.wnames" :key="vv.sid">{{ vv }}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { getServerCate } from '../../assets/api/servers'
export default {
  name: 'Company',
  data () {
    return {
      mess: '',
      note: ''
    }
  },
  mounted () {
    let cid = this.$route.params
    getServerCate(cid).then(res => {
      this.mess = res.data
      this.$store.commit('changename', this.mess.type)
    })
  }
}
</script>
<style scoped>
  .company{
    width: 100%;
    background: #f4f8fb;
    overflow: hidden;
  }
  .company_items{
    width: 100%;
    padding: 20px 30px;
    background: white;
    margin-top: 20px;
    overflow: hidden;
  }
  .company_out{
    width: 100%;
    overflow: hidden;
  }
  .company_img{
    width: 236px;
    float: left;
    overflow: hidden;
  }
  .company_img>img{
    width: 100%;
  }
  .company_mess{
    width: 434px;
    float: left;
    margin-left: 20px;
  }
  .company_mess>P{
    font-size: 28px;
    color: #666;
    line-height: 42px;
  }
  .company_mess>P:first-of-type{
    font-size: 32px;
    line-height: 40px;
    color: black;
    margin-bottom: 20px;
  }
  .company_cate_title{
    width: 140px;
    font-size: 28px;
    line-height: 65px;
    float: left;
    color: #929292;
    margin-top: 20px;
  }
  .company_cate_mess{
    width: 530px;
    float: left;
    margin-left: 20px;
  }
  .company_cate_mess>span{
    display: block;
    width: 142px;
    float: left;
    line-height: 65px;
    text-align: center;
    color: black;
    font-size: 28px;
    border: 1px solid #9cc4f2;
    margin-right: 20px;
    margin-top: 20px;
    border-radius: 15px;
    overflow: hidden;
  }
</style>
