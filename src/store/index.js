import { createStore } from 'vuex'
import getData from '../Services/getDataService'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
<<<<<<< HEAD
    isClientSubmitted: {},
    clientInfo: {},
    clientID: {},
    patients: [],
    RETRIVE_PATIENTS: [],
    RETRIVE_DOCTORS: [],
    addDoctorToPatient: [],
    gender: [{ value: 'Male' }, { value: 'Female' }, { value: 'Other' }],
  },
  plugins: [
    createPersistedState({
      paths: ['clietID', 'clientInfo', 'patients', 'isClientSubmitted'],
    }),
  ],
  mutations: {
    // ADD_DOCTOR_TO_PATIENTS(state, addDoctorToPatient) {
    //   state.addDoctorToPatient = addDoctorToPatient
    // },
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
    CLEAR_RETRIVE_DOCTORS(state) {
      state.RETRIVE_DOCTORS = []
    },
    RETRIVE_DOCTORS(state, doctor) {
      state.RETRIVE_DOCTORS.push(doctor)
    },
  },
  getters: {
    getRetrivedDoctors: (state) => {
      return state.RETRIVE_DOCTORS
    },
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
    showPatients() {
      getData
        .get('Patients')
        .then()
        .catch((err) => console.log(err))
    },
    showDoctors() {
      getData
        .get('Doctors')
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
=======
    id: 23232,
  },
  mutations: {},
  actions: {},
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
  modules: {},
})
