<template>
  <div class="sub" v-bind:style="{backgroundImage:'url('+ require('../../assets/mast/sub.jpg') +')'}">
    <div class="sub_form">
      <div class="sub_title">
        提交信息
      </div>
      <div class="sub_title_two">
        个人信息
      </div>
      <div class="sub_person">
        <div class="sub_person_input">
          <span class="sub_name">姓名：</span>
          <input type="text" v-model="data.name">
        </div>
        <div class="sub_person_input">
          <span class="sub_name">公司：</span>
          <input type="text" v-model="data.company">
        </div>
        <div class="sub_person_input">
          <span class="sub_name">电话：</span>
          <input type="text" v-model="data.phone">
        </div>
        <div class="sub_person_input">
          <span class="sub_name">地址：</span>
          <input type="text" v-model="data.address">
        </div>
      </div>
      <div class="sub_title_two">
        业务详情（可多选）
      </div>
      <div class="sub_person">
        <div class="sub_cate">
          <ul>
            <li v-for="v in mess" :key="v.id" @click="v.sta=!v.sta" :class="{back_color:!v.sta}">{{v.cname}}</li>
          </ul>
        </div>
      </div>
      <div v-for="v in mess" :key="v.id" v-show="!v.sta">
        <div class="sub_person">
          <ul class="sub_ul">
            <li class="sub_cate_item"  v-for="vv in v._data" :key="vv.id" @click="vv.sta=!vv.sta" :class="{sub_text:!vv.sta}">{{vv.cname}}</li>
          </ul>
        </div>
      </div>
      <div class="sub_person">
        <span class="sub_name">留言：</span>
        <textarea name="" id="sub_text" cols="30" rows="10" v-model="data.content"></textarea>
      </div>
      <div class="sub_sub" @click="subform">
        提交信息
      </div>
    </div>
  </div>
</template>
<script>
import * as validate from '../../assets/js/validate'
import {getfrom, addsmess} from '../../assets/api/servers'
import { Message } from 'element-ui'
export default {
  name: 'Sub',
  data () {
    return {
      mess: '',
      data: {
        name: '',
        company: '',
        phone: '',
        address: '',
        content: '',
        cid: [],
        sid: ''
      },
      msg: '',
      validate
    }
  },
  mounted () {
    this.$store.commit('changename', '提交需求')
    let sid = this.$route.params
    this.data.sid = sid.sid
    getfrom(sid).then(res => {
      this.mess = res.data
    })
  },
  methods: {
    subform () {
      this.data.cid = []
      for (let i in this.mess) {
        for (let j = 0; j < this.mess[i]['_data'].length; j++) {
          if (this.mess[i]['_data'][j].sta < 1) {
            this.data.cid.push(this.mess[i]['_data'][j].cname)
          }
        }
      }
      this.data.cid = JSON.stringify(this.data.cid)
      addsmess(this.data).then(res => {
        // eslint-disable-next-line
        if (res.data.valid == 400) {
          Message({
            message: res.data.msg,
            type: 'error',
            duration: 5 * 1000
          })
          // eslint-disable-next-line
        } else if (res.data.valid == 200){
          Message({
            message: res.data.msg,
            type: 'success',
            duration: 2 * 1000
          })
          setTimeout(function () {
            history.go(-1)
          }, 2000)
        }
      })
    }
  }
}
</script>
<style scoped>
  .sub{
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center  center;
    overflow: hidden;
  }
  .sub_form{
    width: 100%;
    background: rgba(0,0,0,0.3);
    overflow: hidden;
  }
  .sub_title {
    width: 100%;
    background: black;
    color: white;
    text-align: center;
    font-size: 28px;
    line-height: 68px;
    overflow: hidden;
  }
  .sub_title_two{
    width: 100%;
    padding: 0 30px;
    color: white;
    font-size: 28px;
    margin-top: 30px;
    overflow: hidden;
  }
  .sub_person{
    width: 100%;
    padding: 0 30px;
    margin-top: 30px;
    overflow: hidden;
  }
  .sub_name{
    display: block;
    font-size: 26px;
    width: 90px;
    float: left;
    color: #cecdcd;
    line-height: 80px;
  }
  .sub_cate{
    width: 100%;
    float: left;
  }
  .sub_cate li{
    float: left;
    width: 150px;
    line-height: 54px;
    border-radius: 5px;
    text-align: center;
    background: #1f7ebf;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    color: white;
    overflow: hidden;
  }
  .sub_cate li:nth-of-type(4n){
    margin-right: 0;
  }
  .sub_person_input{
    width: 100%;
    float: left;
    margin-bottom: 30px;
  }
  .sub_person_input>input{
    display: block;
    width: 590px;
    float: left;
    height: 80px;
    font-size: 30px;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    padding-left: 5px;
  }
  .sub_ul{
    width: 100%;
    padding-left: 10px;
    float: left;
  }
  .sub_cate_item{
    width: 110px;
    float: left;
    margin-right: 60px;
    line-height: 54px;
    text-align: center;
    color: white;
    border-bottom: 2px solid #1f7ebf;
    overflow: hidden;
  }
  .sub_cate_item:nth-of-type(5n){
    margin-right: 0;
  }
  #sub_text{
    display: block;
    border-radius: 5px;
    width: 100%;
    height: 328px;
    margin-top: 18px;
    padding: 15px;
    font-size: 16px;
    float: left;
    resize: none;
    outline: none;
    overflow: hidden;
  }
  .sub_sub{
    width: 266px;
    margin: 30px auto;
    background: #1f7ebf;
    border-radius: 5px;
    text-align: center;
    color: white;
    font-size: 18px;
    line-height: 54px;
    overflow: hidden;
    cursor: pointer;
  }
  .sub_cate .back_color{
    background: #666;
  }
  .sub_text{
    color: #1f7ebf;
  }
</style>
