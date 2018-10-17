import Vue from 'vue'

const state = {
  events: []
}

const mutations = {
  'SET_EVENTS' (state, events) {
    state.events = events
  }
}

const actions = {
  fetchData: ({commit}) => {
    Vue.http.get('events.json')
      .then(response => response.json())
      .then(data => {
        if (data) {
          commit('SET_EVENTS', data)
        }
      })
  }
}

const getters = {
  events: state => {
    return state.events
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
