import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    clients: [],
    patients: [],
  },
  plugins: [createPersistedState({ paths: ['clients'] })],
  mutations: {
    ADD_CLIENTS(state, client) {
      state.clients.push(client)
    },
    ADD_PATIENTS(state, patient) {
      state.patients.push(patient)
    },
  },
  getters: {
    getClientID: (state) => {
      return state.clients.map((clientID) => clientID.id)
    },
  },
  actions: {},
  modules: {},
})
