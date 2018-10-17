<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
        <app-event v-for="event in events" :key="event.id" :event="event"></app-event>
    </v-layout>
  </v-container>
</template>

<script>
import Event from './Event'
export default {
  name: 'events',
  components: {
    appEvent: Event
  },
  computed: {
    events () {
      this.$store.dispatch('fetchData')
      return this.$store.getters.events
    }
  }
}
</script>

<style scoped>
</style>
