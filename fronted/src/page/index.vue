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
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>
