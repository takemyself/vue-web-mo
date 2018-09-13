<template>
  <div>
    <Heard></Heard>
    <router-view></router-view>
    <Bottoms></Bottoms>
  </div>
</template>
<script>
import Heard from './Heard'
import Bottoms from './Bottoms'
export default {
  name: 'Layout',
  components: {
    Heard,
    Bottoms
  }
}
</script>
