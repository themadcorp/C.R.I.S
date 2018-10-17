<template>
  <v-slide-y-transition mode="out-in">
    <v-flex md6 xs12 sm8 offset-md3 offset-sm2>
      <v-card :color="event.color" class="white--text">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs7>
              <div>
      	        <div class="headline">{{event.title}}</div>
                <div>{{event.desc}}</div>
                <div>Date: {{event.date}}</div>
              </div>
            </v-flex>
          	<v-flex xs5>
            <v-img
              :src="event.image"
              height="125px"
              contain
            ></v-img>
            </v-flex>
          </v-layout>

          <v-layout row wrap align-center>
            <v-flex xs4>
              <v-card-actions >
              <v-btn flat dark :href="event.link">Register Now</v-btn>
              </v-card-actions>
            </v-flex>

            <v-spacer></v-spacer>

            <v-flex xs3>
              <v-card-actions style="width: 100%">
            
                <social-sharing 
                  :url=event.link
                  :title=event.title
                  :description=event.desc
                  :quote=event.date
                  :media=event.image
                  inline-template>

                  <v-speed-dial
                    v-model="fab"
                    middle
                    right
                    direction="left"
                    transition="slide-x-reverse-transition"
                  >
                    <v-btn
                    slot="activator"
                      v-model="fab"
                      color="blue darken-2"
                      dark
                      fab
                    >
                      <v-icon>share</v-icon>
                      <v-icon>close</v-icon>
                    </v-btn>

                    <network network="whatsapp">
                    <v-btn
                      fab
                      dark
                      small
                      color="green"
                    >
                      <v-icon>fab fa-whatsapp</v-icon>
                    </v-btn>
                    </network>

                    <network network="facebook">
                    <v-btn
                      fab
                      dark
                      small
                      color="indigo"
                    >
                      <v-icon style="padding: 8px 0 8px 0">fab fa-facebook-f</v-icon>
                    </v-btn>
                    </network>

                    <network network="twitter">
                    <v-btn
                      fab
                      dark
                      small
                      color="light-blue"
                    >
                      <v-icon style="padding: 7px 0 7px 0">fab fa-twitter</v-icon>
                    </v-btn>
                    </network>

                  </v-speed-dial>
                </social-sharing>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-slide-y-transition>
</template>

<script>
export default {
  name: 'event',
  props: ['event'],
  data () {
    return {
      fab: false
    }
  },
  computed: {
    activeFab () {
      console.log(event.title)
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },
  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  }
}
</script>

<style scoped>
</style>
