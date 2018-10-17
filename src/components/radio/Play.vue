<template>
  <div>
    <audio ref="audio" preload="meta" :src="url">audio</audio>
    <div id="player-play" class="player-continuous" :class="this.isPlaying ? 'player-playing' : 'player-paused'">
      <i class="player-mdi player-mdi-play" @click="play"></i>
      <i class="player-mdi player-mdi-pause" @click="pause"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'play',
  data () {
    return {
      url: null,
      audio: null,
      isPlaying: false
    }
  },
  props: {
    listenUrl: {
      default: ''
    }
  },
  methods: {
    play () {
      this.audio.src = this.listenUrl
      this.audio.load()
      this.audio.play()
      this.isPlaying = true
    },
    pause () {
      this.audio.src = ''
      this.audio.pause()
      this.isPlaying = false
    },
    toggle () {
      if (this.isPlaying) {
        this.pause()
      } else {
        this.play()
      }
      console.log('play function: ' + this.audio.play())
    }
  },
  mounted () {
    this.audio = this.$refs.audio
    this.audio.src = this.listenUrl
    this.url = this.audio.src
    this.isPlaying = false
  }
}
</script>

<style scoped>
</style>
