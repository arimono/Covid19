import { createStore } from 'vuex'
import getData from '../Services/getDataService'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    isClientSubmitted: {},
    clientInfo: {},
    clientID: {},
    patients: [],
    RETRIVE_PATIENTS: [],
  },
  plugins: [
    createPersistedState({
      paths: ['clietID', 'clientInfo', 'patients', 'isClientSubmitted'],
    }),
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
    RETRIVE_PATIENTS(state, patient) {
      state.RETRIVE_PATIENTS.push(patient)
    },
  },
  getters: {
    getRetrivedPatients: (state) => {
      return state.RETRIVE_PATIENTS
    },
    getClientSubmit: (state) => {
      return state.isClientSubmitted
    },
    getClientData: (state) => {
      return state.clientInfo
    },
    getClientName: (state) => {
      return state.clientInfo.name
    },

    getPatient: (state) => {
      return state.patients
    },
  },
  actions: {
    showPatient() {
      getData
        .get('Patients')
        .then()
        .catch((err) => console.log(err))
    },
    reload() {
      window.location.reload()
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
  modules: {},
})
