<template>
  <baidu-map class="bm-view" :center="center" :zoom="zoom" ak="zOAlrzHT8ZgeCqz8X3qTKstEH4HEBbaE" @ready="handler">
  </baidu-map>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map'
export default {
  name: 'Maps',
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  mounted () {
  //  usTi9C7kheKPnsA6hUcjNYKGKqRDsNtM
  //  loadScript('http://api.map.baidu.com/api?v=2.0&ak=usTi9C7kheKPnsA6hUcjNYKGKqRDsNtM&callback=init', 'allmap', function (res) {
    //  if (res) {
    //  let map = new BMap.Map('allmap')
    //  map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
    //  }
  //  })
  },
  methods: {
    handler ({BMap, map}) {
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  },
  components: {
    BaiduMap
  }
}
</script>
<style scoped>
  .bm-view {
    width: 100%;
    height: 490px;
  }
</style>
