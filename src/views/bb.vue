<template>
  <ul>
    <li v-for="item in b">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState(['b']),
    asyncData ({ store }) {
      return store.dispatch('getBList')
    }
  }
</script>
