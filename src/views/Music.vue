<template>
  <div>
    <button @click="getMusic">
      获取歌曲
    </button>
  </div>
</template>

<script>
export default {
  name: 'MusicView',

  data () {
    return {
    }
  },

  methods: {
    getMusic () {
      this.$axios.get('/music/api/rand.music?type=json&sort=热歌榜').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
