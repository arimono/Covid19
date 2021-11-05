import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    isClientSubmitted: {},
    clientInfo: {},
    clientID: {},
    patients: [],
  },
  plugins: [
    createPersistedState({ paths: ['clientID']['clientInfo'] }['patients'], [
      'isClientSubmitted',
    ]),
  ],
  mutations: {
    CHECK_CLIENT_SUBMIT(state, isClientSubmitted) {
      state.isClientSubmitted = isClientSubmitted
    },
    ADD_CLIENTS(state, clientInfo) {
      state.clientInfo = clientInfo
    },
    ADD_CLIENTS_ID(state, client_ID) {
      state.clientID = client_ID
    },
    ADD_PATIENTS(state, patient) {
      state.patients.push(patient)
    },
  },
  getters: {
    getClientSubmit: (state) => {
      return state.isClientSubmitted
    },
    getClientData: (state) => {
      return state.clientInfo
    },
    getClientName: (state) => {
      return state.clientInfo.name
    },
    getPatientNames: (state) => {
      return state.patients.map((patientsName) => patientsName.name)
    },
    getPatient: (state) => {
      return state.patients
    },
  },
  actions: {},
  modules: {},
})
