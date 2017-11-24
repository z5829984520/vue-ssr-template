<template>
  <ul>
    <li v-for="item in topics">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState(['topics']),
    asyncData ({ store }) {
      return store.dispatch('getTopics')
    }
  }
</script>
