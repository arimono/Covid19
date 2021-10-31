import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'
import store from '../store'

class dataService {
  async create(type, data) {
    try {
      var docRef = await addDoc(collection(db, type), data)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    console.log('Document written with ID: ', docRef.id)
    if (type == 'Clients') {
      store.commit('ADD_CLIENTS_ID', docRef.id)
    }
  }
}
export default new dataService()
