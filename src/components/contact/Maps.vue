<template>
  <div id="allmap"></div>
</template>
<script>
import { loadScript } from '../../assets/js/map'
export default {
  name: 'Maps',
  mounted () {
  //  usTi9C7kheKPnsA6hUcjNYKGKqRDsNtM
    loadScript('http://api.map.baidu.com/getscript?v=2.0&ak=usTi9C7kheKPnsA6hUcjNYKGKqRDsNtM&services=&t=20180823194355', 'bdMap', function (res) {
      // eslint-disable-next-line
      let map = new BMap.Map('allmap') // 创建Map实例
      // eslint-disable-next-line
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
      // 添加地图类型控件
      // eslint-disable-next-line
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          // eslint-disable-next-line
          BMAP_NORMAL_MAP,
          // eslint-disable-next-line
          BMAP_HYBRID_MAP
        ]}))
      map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    })
  }
}
</script>
<style scoped>
  #allmap{
    width: 100%;
    height: 490px;
  }
</style>
