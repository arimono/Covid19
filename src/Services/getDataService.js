import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import store from '../store'

class getData {
  async get(type) {
    const querySnapshot = await getDocs(collection(db, type))
    try {
      querySnapshot.forEach((doc) => {
        if (type == 'Patients') {
          store.commit('RETRIVE_PATIENTS', doc.data())
        }
        //firebase
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
}
export default new getData()
