import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import store from '../store'

class getData {
  async get(type) {
    const querySnapshot = await getDocs(collection(db, type))
    try {
      querySnapshot.forEach((doc) => {
        if (type == 'Patients') {
          var patient = doc.data()
          patient.id = doc.id
          store.commit('RETRIVE_PATIENTS', patient)
        } else if (type == 'Doctors') {
          var doctor = doc.data()
          doctor.id = doc.id
          store.commit('RETRIVE_DOCTORS', doctor)
        }
        //firebase
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
}
export default new getData()
