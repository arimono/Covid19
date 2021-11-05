import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'

class dataService {
  async create(type, data) {
    try {
      var docRef = await addDoc(collection(db, type), data)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    console.log('Document written with ID: ', docRef.id)
  }
}
export default new dataService()
