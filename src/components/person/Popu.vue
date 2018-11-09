<template>
  <div class="popu">
    <div class="popu_mess">
      <span>当前推广客户：</span>
      <span class="popu_count">10</span>
      <span>人 </span>
      <span></span>
      <span>当前已购买人数：</span>
      <span class="popu_count">9</span>
      <span>人</span>
    </div>
    <div class="popu_content">
      <div class="popu_items">
        <ul>
          <li>客户名</li>
          <li>返利范围</li>
          <li>订单时间</li>
          <li>金额</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
      <div class="popu_items">
        <ul>
          <li>yc******al</li>
          <li>首购返现</li>
          <li>2018-10-10</li>
          <li>¥10.00</li>
        </ul>
      </div>
    </div>
    <div class="popu_do">
      成为推广员
    </div>
  </div>
</template>
<script>
export default {
  name: 'Popu',
  mounted () {
    this.$store.commit('changename', '推广客户')
  }
}
</script>
<style scoped="popu">
  .popu{
    width: 100%;
    padding-bottom: 100px;
    overflow: hidden;
  }
  .popu_mess{
    width: 100%;
    padding: 0 30px;
    background: #eee;
    overflow: hidden;
  }
  .popu_mess>span{
    display: inline-block;
    line-height: 70px;
    font-size: 26px;
  }
  .popu_mess .popu_count{
    font-size: 36px;
  }
  .popu_content{
    width: 100%;
    overflow: hidden;
  }
  .popu_items{
    width: 100%;
    padding: 0 30px;
    border-bottom: 1px solid #999;
    overflow: hidden;
  }
  .popu_items:first-of-type li{
    font-size: 28px;
    color: #929292;
  }
  .popu_items li{
    width: 25%;
    float: left;
    font-size: 26px;
    line-height: 70px;
  }
  .popu_items li:last-of-type{
    text-align: right;
  }
  .popu_do{
    width: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 36px;
    color: white;
    background: #1779bd;
    position: fixed;
    left: 0;
    bottom: 100px;
  }
</style>
