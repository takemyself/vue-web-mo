<template>
  <div>1</div>
</template>
<script>
export default {
  name: 'Orderbuy',
  mounted () {
    this.$store.commit('changename', '确认订单')
  }
}
</script>
