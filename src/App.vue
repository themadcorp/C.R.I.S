<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-divider></v-divider>

      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          active-class
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action v-if="item.switch" style="padding-right: 25px">
              <v-switch v-model="dark"></v-switch>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar 
      app 
      fixed
      height="52px"
      :clipped-left="clipped"
      :color="color"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-slide-y-transition mode="out-in">
        <keep-alive include="['radio','events', 'play', 'event']">
          <router-view/>
        </keep-alive>
      </v-slide-y-transition>
    </v-content>

    <v-bottom-nav 
      app
      :value="true"
      :active.sync="e2"
      :color="color"
      height="66px"
      fixed
      shift
    >
      <v-btn dark to="/" router>
        <span>Home</span>
        <v-icon large>home</v-icon>
      </v-btn>
      <v-btn dark to="/radio" router>
        <span>Radio</span>
        <v-icon large>music_note</v-icon>
      </v-btn>
      <v-btn dark to="/events" router>
        <span>Events</span>
        <v-icon large>event</v-icon>
      </v-btn>
      <v-btn dark to="/notifications">
        <span>Notifications</span>
        <v-icon large>notifications</v-icon>
      </v-btn>
    </v-bottom-nav>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      dark: true,
      darkMode: false,
      clipped: true,
      items: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'Account', icon: 'account_box' },
        { title: 'About', icon: 'info' },
        { title: 'Dark Mode', icon: 'invert_colors', switch: 'true' }
      ],
      e2: 0,
      title: 'C.R.I.S'
    }
  },
  computed: {
    color () {
      switch (this.e2) {
        case 0: return 'orange darken-3'
        case 1: return 'blue darken-2'
        case 2: return 'light-blue'
        case 3: return 'light-green'
      }
    },
    drawer () {
      return this.$vuetify.breakpoint.lgAndUp
    }
  },
  created () {
    this.drawer = this.$vuetify.breakpoint.lgAndUp
    switch (window.location.pathname) {
      case '/': this.e2 = 0
        return this.e2
      case '/radio': this.e2 = 1
        return this.e2
      case '/events': this.e2 = 2
        return this.e2
      case '/notifications': this.e2 = 3
        return this.e2
    }
  },
  name: 'App'
}
</script>
