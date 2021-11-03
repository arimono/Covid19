import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    clients: {},
    clientID: {},
    patients: [],
  },
  plugins: [createPersistedState({ paths: ['clientID']['clients'] })],
  mutations: {
    ADD_CLIENTS(state, clients) {
      state.clients = clients
    },
    ADD_CLIENTS_ID(state, client_ID) {
      state.clientID = client_ID
    },
    ADD_PATIENTS(state, patient) {
      state.patients.push(patient)
    },
  },
  getters: {
    getClientName: (state) => {
      return state.clients.map((clientName) => clientName.name)
    },
  },
  actions: {},
  modules: {},
})
