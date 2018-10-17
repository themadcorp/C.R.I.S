<template>
  <v-container fluid style="padding: 0">
    <v-flex md6 xs12 sm8 offset-md3 offset-sm2>
      <div class="player-recss player-dark player-colored player-primary-blue player-accent-yellow player-right player-played" data-interval="3" data-current="Alvaro Soler - La cintura">
        <div id="player-wrapper">
          
          <div id="player-top" class="player-default-art" :style="{ backgroundImage: 'url(' + recentSongs.nowPlay.song.art + ')' }">
            <div class="player-album-wrapper">
              <i class="player-mdi player-mdi-album"></i>
            </div>
            
            <div id="player-top-content" class="player-top-content">
              <div id="player-nowplaying">
                <p id="player-np-title">{{recentSongs.nowPlay.song.title}}</p>
                <p id="player-np-artist">{{recentSongs.nowPlay.song.artist}}</p>
              </div>
              <div id="player-linear"></div>
            </div>
          
            <!-- <div id="player-play" class="player-continuous player-paused">
              <i class="player-mdi player-mdi-play"></i>
              <i class="player-mdi player-mdi-pause"></i>
              <i class="player-mdi player-mdi-stop"></i>
            </div> -->

            <app-play :listenUrl='playStatus.station.listen_url' v-if='playStatus.station' ref='audio' @toggle="togglePlayer"></app-play>
          </div>
            
          <div id="player-bottom" class="player-clearfix">
            <p>Next</p>
            <ul id="player-playedlist" class="player-clearfix">
              <li>
                <div class="player-p-art player-p-default-art"><i class="player-mdi player-mdi-album"></i></div>
                <div class="player-p-info"><p class="player-p-title">{{recentSongs.nextPlay.song.title}}</p><p class="player-p-artist">{{recentSongs.nextPlay.song.artist}}</p></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
import Play from './Play'
export default {
  name: 'radio',
  data () {
    return {
      scr: 'https://demo.azuracast.com/api/nowplaying',
      isPlaying: false,
      playStatus: '',
      recentSongs: {
        nowPlay: {},
        nextPlay: {
          song: {}
        },
        beforePlay: {
          song: {}
        }
      }
    }
  },
  methods: {
    getPlayerStatus: async function () {
      var get = await this.$ajax.get(this.scr)
      this.playStatus = get.data[0]
      this.recentSongs.nowPlay = this.playStatus.now_playing
      this.recentSongs.nextPlay = this.playStatus.playing_next
      this.recentSongs.beforePlay = this.playStatus.song_history[0].song
      console.log(this.recentSongs)
    },
    togglePlayer (emitPlaying) {
      this.$refs.audio.toggle()
      this.isPlaying = !emitPlaying
    }
  },
  mounted () {
    this.getPlayerStatus()
    setInterval(this.getPlayerStatus, 20000)
  },
  activated () {
    this.getPlayerStatus()
    setInterval(this.getPlayerStatus, 20000)
  },
  components: {
    appPlay: Play
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
