<template>
  <div>
    <Heards></Heards>
    <router-view></router-view>
    <Bottoms></Bottoms>
  </div>
</template>
<script>
import Heards from './Heards'
import Bottoms from './Bottoms'
export default {
  name: 'Layouts',
  components: {
    Heards,
    Bottoms
  }
}
</script>
