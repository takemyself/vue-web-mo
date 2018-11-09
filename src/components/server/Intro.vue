<template>
  <div class="intro">
    <div class="intro_out">
      <div class="intro_img">
        <img src="../../assets/mast/intro.png" alt="">
        <div class="intro_con">
          <p>Who we are,what we do and how we do it</p>
          <div class="intro_cate">
            <div class="intro_cate_img intro_cate_logo">
              <img :src="logoimg" alt="">
            </div>
            <div class="intro_cate_img intro_cate_cate" v-bind:class="{intro_active:id}" @click="id=true">
              <img src="../../assets/mast/intro-logo.png" alt="">
              <span>公司简介</span>
            </div>
            <div class="intro_cate_img intro_cate_cate" v-bind:class="{intro_active:!id}" @click="id=false">
              <img src="../../assets/mast/intro-logo2.png" alt="">
              <span>业务内容</span>
            </div>
          </div>
        </div>
      </div>
      <div class="intro_mess" v-show="id">
        <div class="intro_title">
          公司介绍
        </div>
        <div class="intro_content" v-html="com.scontent"></div>
      </div>
      <div class="intro_intro_content" v-show="!id">
        <div class="intro_intro">
          <div class="intro_title">
            业务介绍
          </div>
          <div class="intro_content">
            <ul>
              <li class="intro_cate_content" v-for="v in mess" v-bind:key="v.wid" @click="sta=v.wid">
                <img :src="$store.state.headTitle.imgurl+v.wpic" alt="">
                <span>{{ v.wname }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="intro_intro">
          <div class="intro_title">
            业务详情
          </div>
          <div class="intro_content" v-for="v in mess" v-bind:key="v.wid" v-show="sta==v.wid" v-html="v.wcontent"></div>
        </div>
      </div>
      <router-link class="intro_sub" :to="{path: '/server/sub/'+sid.sid}">
        填写您的需求
      </router-link>
    </div>
  </div>
</template>
<script>
import { getServerContent } from '../../assets/api/servers'
export default {
  name: 'Intro',
  data () {
    return {
      id: true,
      sta: 1,
      mess: '',
      com: '',
      logoimg: '',
      sid: ''
    }
  },
  mounted () {
    this.sid = this.$route.params
    getServerContent(this.sid).then(res => {
      this.mess = res.data.works
      this.com = res.data.com
      this.logoimg = this.$store.state.headTitle.imgurl + this.com.spic
      this.$store.commit('changename', this.com.sname)
    })
  }
}
</script>
<style scoped>
  .intro{
    width: 100%;
    background: #f4f4f4;
    overflow: hidden;
  }
  .intro_out{
    width: 100%;
    margin: 0 auto 100px;
    overflow: hidden;
  }
  .intro_img{
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .intro_img>img{
    display: block;
    height: 406px;
  }
  .intro_mess{
    width: 100%;
    padding: 0 100px;
    background: white;
    margin-top: 20px;
    overflow: hidden;
  }
  .intro_intro_content{
    width: 100%;
    overflow: hidden;
  }
  .intro_intro{
    width: 100%;
    padding: 0 30px;
    background: white;
    margin-top: 20px;
    padding-bottom: 30px;
    overflow: hidden;
  }
  .intro_con{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .intro_con>p{
    color: white;
    font-size: 22px;
    margin-top: 72px;
    padding-left: 80px;
  }
  .intro_cate{
    width: 100%;
    height: 124px;
    padding: 0 50px;
    background: rgba(0,0,0,0.2);
    margin-top: 50px;
    overflow: hidden;
  }
  .intro_cate_img{
    float: left;
  }
  .intro_cate_logo{
    width: 202px;
    margin-right: 160px;
  }
  .intro_cate_logo>img{
    display: block;
    width: 202px;
    height: 50px;
    margin-top: 43px;
  }
  .intro_cate_cate{
    width: 136px;
    height: 100%;
    text-align: center;
    color: white;
    cursor: pointer;
    vertical-align: bottom;
    text-align: center;
  }
  .intro_cate_cate>img{
    display: block;
    width: 44px;
    height: 41px;
    margin: 15px auto;
  }
  .intro_active{
    background: #1f7ebf;
  }
  .intro_title{
    width: 112px;
    line-height: 42px;
    background: #1f7ebf;
    color: white;
    text-align: center;
    margin-top: 30px;
    position: relative;
  }
  .intro_title:after{
    display: block;
    width: 0;
    height: 0;
    content: "";
    border-top: 10px solid #1f7ebf;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    left: 80px;
    bottom: -8px;
  }
  .intro_content{
    width: 100%;
    margin-top: 30px;
    overflow: hidden;
  }
  .intro_cate_content{
    width: 320px;
    margin-right: 50px;
    float: left;
    text-align: center;
    cursor: pointer;
  }
  .intro_cate_content:nth-of-type(2n){
    margin-right: 0;
  }
  .intro_cate_content>img{
    display: block;
    width: 100%;
  }
  .intro_cate_content>span{
    line-height: 50px;
    font-size: 30px;
  }
  .intro_sub{
    display: block;
    width: 500px;
    line-height: 80px;
    color: white;
    font-size: 30px;
    cursor: pointer;
    background: #1f7ebf;
    border-radius: 15px;
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
    overflow: hidden;
  }
  .pro_title_out>span{
    display: block;
    width: 300px;
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
    font-size: 36px;
    line-height: 40px;
    background: white;
  }
  .pro_input>input{
    display: block;
    width: 430px;
    height: 56px;
    font-size: 18px;
    margin: 20px 60px 0 0;
    border: 1px solid #ccc;
    float: left;
    padding-left: 10px;
  }
  .pro_input>input::placeholder{
    font-size: 14px;
  }
  .pro_sub>span{
    display: block;
    width: 583px;
    line-height: 56px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    background: #1f7ebf;
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
</style>
