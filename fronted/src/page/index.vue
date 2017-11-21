<template>
<div id='index'>
  {{userInfo}}
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'index',
  created () {
    this.$store.dispatch('getUserInfo')
  },
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>
